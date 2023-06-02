import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CFuser = async (handle) => {
  let info, submissions = [], solved = {}, contests = new Set();

  try {
    const infoResponse = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
    if (infoResponse.data.status === 'OK') {
      info = infoResponse.data.result[0];
    } else {
      return null;
    }

    const submissionsResponse = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);
    if (submissionsResponse.data.status === 'OK') {
      submissions = submissionsResponse.data.result.sort((a, b) => b.creationTimeSeconds - a.creationTimeSeconds);
    }

    for (const submission of submissions) {
      const problem = submission.problem;

      if ('contestId' in problem) {
        const contest = problem.contestId;
        const key = `${contest}${problem.index}`;

        if (submission.verdict === 'OK') {
          solved[key] = submission.creationTimeSeconds;
        }
        if (submission.author.participantType === 'CONTESTANT') {
          contests.add(contest);
        }
      }
    }

    return {
      info,
      solved,
      contests
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default function Fetching() {
  const [cfhandle, setHandle] = useState(null);
  const Data = JSON.parse(localStorage.getItem('user'));
  const uID = Data ? Data.id : null;

  console.log('Data: ', uID)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/cfhandle/${uID}`);
        
        if (response.ok) {
          const json = await response.json();
          setHandle(json.cf_handle);
          // console.log('after fetching:',cfhandle)
  
        }
      } catch (error) {
        console.log('erro executed')
        console.error(error);
      }
    };

    // console.log('MY handle: ',cfhandle)

    fetchUserData();
  }, [uID]);

  const [userInfo, setUserInfo] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const params = useParams();

  // console.log('MY handle again : ',cfhandle)

  useEffect(() => {
    if (cfhandle) {
      CFuser(cfhandle).then(user => {
        const dict = {
          'handle': user.info.handle,
          'rating': user.info.rating,
          'MaxRating': user.info.maxRating,
          'solveCount': Object.keys(user.solved).length,
          'contestCount': user.contests.size
          
        };
        setUserInfo(dict);
      });
    }
  }, [cfhandle]);

  return (
    <div>
      {userInfo ? (
        <table>
          <thead>
            <tr>
              <th>Handle</th>
              <th>Rating</th>
              <th>Max Rating</th>
              <th>Solve Count</th>
              <th>Contest Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userInfo.handle}</td>
              <td>{userInfo.rating}</td>
              <td>{userInfo.MaxRating}</td>
              <td>{userInfo.solveCount}</td>
              <td>{userInfo.contestCount}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}
