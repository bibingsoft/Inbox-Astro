

import React from "react";

function Button({ btnImage ,btnName, bgColor ,textColor }) {
    return (
        <button className={`btn bg-${bgColor} d-flex align-items-center text-${textColor}`}><i class="me-2">
            
                                <img src={btnImage} alt="# "/>
            
                              </i><span>{btnName}</span> </button>
    );
}

export default Button;
