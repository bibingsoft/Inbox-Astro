
import React from "react";

function Input({ label,id,placeholder,type }) {
    return (
        <div class="form-group mt-4">
    <label className="text-primary mb-1" for={id}>{label}</label>
    <input type={type} class="form-control bg-white" id={id}  placeholder={placeholder}/>
  </div>
    );
}

export default Input;