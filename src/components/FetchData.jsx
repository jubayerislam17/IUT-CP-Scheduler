import React, { useEffect, useState } from 'react'
import '../css/FetchData.css'

const FetchData = (props) => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="container">
            {
                users.map((curElem) => {
                    return (
                        <div className="card">
                            <div className="card_item" key={curElem.id}>
                                <div className="card_inner">
                                    <div className="webName">{curElem.login}</div>
                                    <div className="time">{curElem.url}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    )
}

export default FetchData;

