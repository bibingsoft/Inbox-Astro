

import React from "react";

function CircularProgressBlue({ value , dataPercentage}) {
    return (
        <div className="gap-2  progress-card">
        <div className="progress-agent" data-percentage={dataPercentage}>
        <span className="progress-left-agent">
          <span className="progress-bar-agent"></span>
        </span>
        <span className="progress-right-agent">
          <span className="progress-bar-agent"></span>
        </span>
        <div className="progress-value-agent">
          <div className="fw-500">
           {value}
          </div>
        </div>
       
      </div> 
      <span>
        Days trial left 
     </span>
      </div>
    );
}

export default CircularProgressBlue;






