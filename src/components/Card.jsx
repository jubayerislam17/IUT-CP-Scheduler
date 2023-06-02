import React from "react";
import "../css/Card.css";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className="card-container">
            <Link to="/" >
                <div className="card2">
                    <div className="gradient"></div>
                    <div className="info">
                        {/* <div className="text">First Group</div> */}
                        <div className="title">Currently Ongoing</div>
                    </div>
                </div>
            </Link>
            <Link to="/" >

                <div className="card2">
                    <div className="gradient"></div>
                    <div className="info">
                        {/* <div className="text">First Group</div> */}
                        <div className="title">Today</div>
                    </div>
                </div>
            </Link>
            <Link to="/" >

                <div className="card2">
                    <div className="gradient"></div>
                    <div className="info">
                        {/* <div className="text">First Group</div> */}
                        <div className="title">This Week</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
