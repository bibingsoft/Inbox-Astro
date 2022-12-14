import React from "react";

function Search() {
    return (
        <div className="input-group  custom-search-sidebar mt-3">
        <span className="input-group-text bg-white border-0" id="basic-addon1"><img
            src="/assets/search-form.svg"/></span>
        <input type="search" className="form-control border-0 search-input" placeholder="Search conversation or people"
          aria-label="search" aria-describedby="basic-addon1"/>
      </div>
    );
}

export default Search;
