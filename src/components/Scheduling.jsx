import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../css/FetchData.css';
import '../css/Card.css';
import '../css/FetchData.css';

const Scheduling = () => {
    const [upcomingContests, setUpcomingContests] = useState([]);
    const [filteredContests, setFilteredContests] = useState([]);
    const [activeButton, setActiveButton] = useState(0);

    useEffect(() => {
        axios
            .get('https://codeforces.com/api/contest.list?gym=false')
            .then((response) => {
                const allContests = response.data.result;
                const upcomingContests = [];

                for (let contest of allContests) {
                    if (contest.phase === 'BEFORE') {
                        const startDateTime = new Date((contest.startTimeSeconds - 300) * 1000);
                        const startDate = startDateTime.toDateString();
                        const startTime = startDateTime.toTimeString().substring(0, 5);

                        upcomingContests.push({
                            url: `https://codeforces.com/contests/${contest.id}`,
                            name: contest.name,
                            startDate,
                            startTime,
                        });
                    }
                }

                setUpcomingContests(upcomingContests);
                setFilteredContests(upcomingContests.filter((contest) => new Date(contest.startDate) <= new Date()));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleFilterContests = (filterType, buttonIndex) => {
        let filtered = [];

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        console.log(today);

        if (filterType === 'ongoing') {
            filtered = upcomingContests.filter((contest) => new Date(contest.startDate) <= new Date());
        } else if (filterType === 'laterToday') {
          
            upcomingContests.forEach((contest) => {
                console.log(contest.startDate);
                console.log(contest.startTime);
            });


            filtered = upcomingContests.filter(
                (contest) =>
                    new Date(contest.startDate) >= new Date() &&
                    new Date(contest.startDate) <= new Date(today.getTime() + 24 * 60 * 60 * 1000)
            );
        } else if (filterType === 'laterFuture') {
            // const today = new Date();
            // today.setHours(0, 0, 0, 0);

            filtered = upcomingContests.filter(
                (contest) => new Date(contest.startDate) >= new Date(today.getTime() + 24 * 60 * 60 * 1000)
            );
        }

        setActiveButton(buttonIndex);
        setFilteredContests(filtered);
    };

    return (
        <>
            <div className="card-container">
                <div className="card2">
                    <div className="gradient"></div>
                    <div className="info">
                        <div className="title">

                            <button onClick={() => handleFilterContests('ongoing', 0)} className={activeButton === 0 ? 'active' : ''}>
                                Currently Ongoing
                            </button>
                        </div>
                    </div>
                </div>



                <div className="card2">
                    <div className="gradient"></div>
                    <div className="info">
                        <div className="title">
                            <button
                                onClick={() => handleFilterContests('laterToday', 1)}
                                className={activeButton === 1 ? 'active' : ''}
                            >Today</button>
                        </div>
                    </div>
                </div>



                <div className="card2">
                    <div className="gradient"></div>
                    <div className="info">
                        <div className="title">
                            <button
                                onClick={() => handleFilterContests('laterFuture', 2)}
                                className={activeButton === 2 ? 'active' : ''}
                            >This Week</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container">
                {filteredContests.map((curElem, index) => {
                    return (
                        <div className="card3" key={curElem.url}>
                            <div className="card_item">
                                <div className="card_inner">
                                <div className='codeforces'>Codeforces</div>
                                    <div className="webName">{curElem.name.substring(11,)}</div>
                                    {/* <div className="date">{curElem.startDate}</div> */}
                                    <div className="time">{curElem.startDate}</div>
                                    <div className='userName'>{curElem.startTime}</div>
                                    {/* <div className='user'>{curElem.startTime}</div> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Scheduling;