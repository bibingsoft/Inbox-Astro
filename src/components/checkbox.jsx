import React from "react";

function Checkbox({ title ,id}) {
    return (
        <div className="check-box">
                                <input type="checkbox" id={id}/>
                                <label className="dark-charcoal mb-3" for={id}>{title}</label>
                              </div>
    );
}

export default Checkbox;
