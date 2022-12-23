
import React from "react";

function Select({ label,id,value }) {
    return (
        <div className="form-group mt-3">
        <label className="text-primary mb-1" for={id}>{label}</label>
        <select className="form-control  bg-white" id={id}>
          <option>{value}</option>
        </select>
      </div>
    )
}

export default Select;