import React from "react";
import "../css/Card.css";

const Card = () => {
    return (
        <div className="card-container">
            <div className="card2">
                <div className="gradient"></div>
                <div className="info">
                    {/* <div className="text">First Group</div> */}
                    <div className="title">Currently Ongoing</div>
                </div>
            </div>

            {/* <div className="card2">
        <div className="gradient"></div>
        <div className="info">
          <div className="text">/Another Group/</div>
          <div className="title">Upcoming Event</div>
        </div>
      </div> */}
        </div>
    );
};

export default Card;
