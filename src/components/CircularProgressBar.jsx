

import React from "react";

function CircularProgressBar({ value }) {
    return (
        <div className="gap-2 my-2 progress-card">
        <div className="progress" data-percentage="30">
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
        Days trial left  <a  className="me-3" href="#"> Upgrade Plan</a>
        </div>
    );
}

export default CircularProgressBar;
