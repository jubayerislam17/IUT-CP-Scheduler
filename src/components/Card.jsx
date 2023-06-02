import React from "react";
import "../css/Card.css";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className="card-container">
                <div className="card2">
                    <div className="gradient"></div>
                    <div className="info">
                        {/* <div className="text">First Group</div> */}
                        <div className="title"><button>Currently Ongoing</button></div>
                    </div>
                </div>

                <div className="card2">
                    <div className="gradient"></div>
                    <div className="info">
                        {/* <div className="text">First Group</div> */}
                        <div className="title"><button>Today</button></div>
                    </div>
                </div>

            {/* <button> */}
                <div className="card2">
                    <div className="gradient"></div>
                    <div className="info">
                        {/* <div className="text">First Group</div> */}
                    <div className="title"> <button>This Week</button></div>
                    </div>
                </div>
            {/* </button> */}
        </div>
    );
};

export default Card;
