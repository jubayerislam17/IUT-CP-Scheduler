import React, { useState, useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import '../css/PersonalProfile.module.css';
import { Navbar } from './Navbar';
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

const PersonalProfile = () => {
  const [cfhandle, setHandle] = useState(null);
  const Data = JSON.parse(localStorage.getItem('user'));
  const uID = Data ? Data.id : null;

  console.log('Data: ', uID);

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
        console.log('erro executed');
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
    <>
      <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
        {userInfo ? (
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="6" className="mb-4 mb-lg-0">
                <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                  <MDBRow className="g-0">
                    <MDBCol md="4" className="gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="Avatar" className="my-5" style={{ width: '80px', borderRadius:'50%' }} fluid />
                      <MDBTypography tag="h5">{userInfo.handle}</MDBTypography>
                      {/* <MDBCardText>Web Designer</MDBCardText> */}
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody className="p-4">
                        <MDBTypography tag="h6">Information</MDBTypography>
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Contest Rating</MDBTypography>
                            <MDBCardText className="text-muted">{userInfo.rating}</MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Max Rating</MDBTypography>
                            <MDBCardText className="text-muted">{userInfo.MaxRating}</MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        {/* <MDBTypography tag="h6">Information</MDBTypography> */}
                        <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Solve</MDBTypography>
                            <MDBCardText className="text-muted">{userInfo.solveCount}</MDBCardText>
                          </MDBCol>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Count</MDBTypography>
                            <MDBCardText className="text-muted">{userInfo.contestCount}</MDBCardText>
                          </MDBCol>
                        </MDBRow>

                        <hr className="mt-0 mb-4" />
                        {/* <MDBRow className="pt-1">
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Total Solve</MDBTypography>
                            <MDBCardText className="text-muted">info@example.com</MDBCardText>
                          </MDBCol>
                        </MDBRow> */}
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ) : (
          <p>Loading user Info..</p>
        )}
      </section>
      <Navbar />
    </>
  );
};

export default PersonalProfile;
