import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContestList() {
  const [upcomingContests, setUpcomingContests] = useState([]);

  useEffect(() => {
    axios.get('https://codeforces.com/api/contest.list?gym=false')
      .then(response => {
        const allContests = response.data.result;
        const upcomingContests = [];

        for (let contest of allContests) {
          if (contest.phase === 'BEFORE') {
            upcomingContests.push({
              url: `https://codeforces.com/contests/${contest.id}`,
              name: contest.name,
              start: new Date((contest.startTimeSeconds - 300) * 1000).toISOString(),
            });
          }
        }

        setUpcomingContests(upcomingContests);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Upcoming Contests</h1>
      <ul>
        {upcomingContests.map(contest => (
          <li key={contest.url}>
            <a href={contest.url}>{contest.name}</a> - {contest.start}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContestList;
