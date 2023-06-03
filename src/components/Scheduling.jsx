import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/FetchData.css';
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
                        
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
                tomorrow.setHours(0, 0, 0, 0);

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
                setFilteredContests(upcomingContests.filter((contest) => new Date(contest.startDate) >= today &&
                new Date(contest.startDate) < tomorrow));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleFilterContests = (filterType, buttonIndex) => {
        let filtered = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        if (filterType === 'today') {
            filtered = upcomingContests.filter((contest) => new Date(contest.startDate) >= today &&
            new Date(contest.startDate) < tomorrow);
        } else if (filterType === 'thisWeek') {
            filtered = upcomingContests.filter(
                (contest) => new Date(contest.startDate) <= new Date(nextWeek)
            );
        } else if (filterType === 'allAnnounced') {
            filtered = upcomingContests;
        }

        setActiveButton(buttonIndex);
        setFilteredContests(filtered);
    };

    return (
        <>
            <div className="card-container">
                <button
                    onClick={() => handleFilterContests('today', 0)}
                    className={activeButton === 0 ? 'active' : ''}
                >
                    <div className={`card2 ${activeButton === 0 ? 'green' : ''}`}>
                        <div className="gradient"></div>
                        <div className="info">
                            <div className="title">Today</div>
                        </div>
                    </div>
                </button>

                <button
                    onClick={() => handleFilterContests('thisWeek', 1)}
                    className={activeButton === 1 ? 'active' : ''}
                >
                    <div className={`card2 ${activeButton === 1 ? 'green' : ''}`}>
                        <div className="gradient"></div>
                        <div className="info">
                            <div className="title">This Week</div>
                        </div>
                    </div>
                </button>

                <button
                    onClick={() => handleFilterContests('allAnnounced', 2)}
                    className={activeButton === 2 ? 'active' : ''}
                >
                    <div className={`card2 ${activeButton === 2 ? 'green' : ''}`}>
                        <div className="gradient"></div>
                        <div className="info">
                            <div className="title">All Announced</div>
                        </div>
                    </div>
                </button>
            </div>

            <div className="container">
                {filteredContests.map((curElem, index) => {
                    return (
                        <div className="card3" key={curElem.url}>
                            <div className="card_item">
                                <div className="card_inner">
                                    <div className="webName">{curElem.name}</div>
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
