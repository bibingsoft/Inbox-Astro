

import React from "react";

function Radio({ id,title}) {
    return (
        <div className="mt-4">
        <input
          id={id}
          className="radio-tick "
          name="radio-user-group"
          type="radio"
          
        />
        <label
          for={id}
          className="radio-tick-label text-primary"
          >{title}
        </label>
        </div>
    );
}

export default Radio;
