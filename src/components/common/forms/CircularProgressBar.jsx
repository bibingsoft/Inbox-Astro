

import React from "react";

function CircularProgressBar({ value , dataPercentage}) {
    return (
        <div className="gap-2  progress-card">
        <div className="progress" data-percentage={dataPercentage}>
          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>
          <div className="progress-value">
            <div>
             {value}
            </div>
          </div>
        </div>
        <span>
        Days trial left 
      <a  className="me-3" href="#"> Upgrade Plan</a> </span>
        </div>
    );
}

export default CircularProgressBar;
