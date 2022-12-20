

import React from "react";

function Button({ btnImage ,btnName  }) {
    return (
        <button className="btn bg-light-blue d-flex align-items-center text-secondary "><i class="me-2">
            
                                <img src={btnImage} alt="# "/>
            
                              </i><span className="ms-2">{btnName}</span> </button>
    );
}

export default Button;
