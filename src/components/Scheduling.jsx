import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/FetchData.css';
import '../css/Card.css';

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
                        upcomingContests.push({
                            url: `https://codeforces.com/contests/${contest.id}`,
                            name: contest.name,
                            start: new Date((contest.startTimeSeconds - 300) * 1000).toISOString(),
                        });
                    }
                }

                setUpcomingContests(upcomingContests);
                setFilteredContests(upcomingContests.filter((contest) => new Date(contest.start) <= new Date()));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleFilterContests = (filterType, buttonIndex) => {
        let filtered = [];

        if (filterType === 'ongoing') {
            filtered = upcomingContests.filter((contest) => new Date(contest.start) <= new Date());
        } else if (filterType === 'laterToday') {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            filtered = upcomingContests.filter(
                (contest) =>
                    new Date(contest.start) > new Date() &&
                    new Date(contest.start) < new Date(today.getTime() + 24 * 60 * 60 * 1000)
            );
        } else if (filterType === 'laterFuture') {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            filtered = upcomingContests.filter(
                (contest) => new Date(contest.start) >= new Date(today.getTime() + 24 * 60 * 60 * 1000)
            );
        }

        setActiveButton(buttonIndex);
        setFilteredContests(filtered);
    };

    return (
        <>
            <div className="card-container">
                <button
                    onClick={() => handleFilterContests('ongoing', 0)}
                    className={activeButton === 0 ? 'active' : ''}
                >
                    <div className="card2">
                        <div className="gradient"></div>
                        <div className="info">
                            <div className="title">Currently Ongoing</div>
                        </div>
                    </div>
                </button>

                <button
                    onClick={() => handleFilterContests('laterToday', 1)}
                    className={activeButton === 1 ? 'active' : ''}
                >
                    <div className="card2">
                        <div className="gradient"></div>
                        <div className="info">
                            <div className="title">Today</div>
                        </div>
                    </div>
                </button>

                <button
                    onClick={() => handleFilterContests('laterFuture', 2)}
                    className={activeButton === 2 ? 'active' : ''}
                >
                    <div className="card2">
                        <div className="gradient"></div>
                        <div className="info">
                            <div className="title">This Week</div>
                        </div>
                    </div>
                </button>
            </div>

            <div className="container">
                {/* <h1>Upcoming Contests</h1> */}
                {filteredContests.map((curElem, index) => {
                    return (
                        <div className="card" key={curElem.url}>
                            <div className="card_item">
                                <div className="card_inner">
                                <div className='box'></div>
                                    <div className="webName">{curElem.name}</div>
                                    <div className="time">{curElem.start}</div>
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
