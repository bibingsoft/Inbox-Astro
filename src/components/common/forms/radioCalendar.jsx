

import React from "react";

function RadioCalendar({ id,title}) {
    return (
        <div>
        <input
          id={id}
          class="radio-custom"
          name="radio-group"
          type="radio"
          
        />
        <label for={id} class="radio-custom-label">{title}</label>
      </div>
    );
}

export default RadioCalendar;
