

import React from "react";

function UserListingInbox({ title, subtitle, time, username, socialMedia,active,borderColor }) {
    return (
      <div className={`card card-${active} rounded border-0 position-relative p-4`}>
      
      <div className="d-flex">               
        <div className="card-round d-flex flex-nowrap">
        
        <div className="avatar h-6 w-6 d-inline-flex align-items-center justify-content-center text-center text  text-uppercase bg-light-blue rounded-circle position-relative fs-3 border-green"
         ></div>
        
        
        </div>
        <div className="ps-3 w-100">
          <div className="d-flex">
            <div>
              <span className="fs-6 d-block fw-500 text-primary">{title}</span>
              <span className="text-gray-medium fs-6 d-block mt-2 card-truncate">{subtitle}</span>
            </div>
      
          </div>
          <div className="d-flex align-items-center mt-3">
            <span className="card-time fs-6 text-mist-gray fw-normal">{time}</span>
            <a className={`text-contrast-blue fs-12 fw-normal bg-transparent align-items-center rounded-pill py-1 px-2 chat-${borderColor} ms-auto`}>
              <i><img className="me-1" src={socialMedia}/></i>{username}
            </a>
          </div>
        </div>
      
      </div>
      </div>
    );
}

export default UserListingInbox;
