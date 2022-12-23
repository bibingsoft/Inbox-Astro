

import React from "react";

function UserList({ userImage,title, subtitle, time, username, socialMedia, active }) {
    return (
        <div className={`card card-${active} rounded border-0 position-relative p-4`}>
        <div className="new-message-dot ">
        
          <i className="card-circle-org h-1 w-1 bg-blue float-end mt-1 d-block rounded-circle"></i>
        </div>
        <div className="d-flex">               
          <div className="card-round d-flex flex-nowrap">
            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light-blue h-6 w-6">
              <img className="h-3 w-3" src={userImage} alt="# "/>
            </div>
          </div>
          <div className="ps-3 w-100">
            <div className="d-flex">
              <div>
                <span className="fs-6 d-block fw-500 text-primary">{title}</span>
                <span className="text-gray-medium fs-6 d-block mt-2 card-truncate">{subtitle}</span>
              </div>
        
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="card-time fs-12 text-mist-gray fw-normal">{time}</span>
              <a className="text-contrast-blue fs-12 fw-normal bg-transparent align-items-center rounded-pill py-1 px-2 chat-widget ms-auto">
                <i><img className="me-1" src={socialMedia}/></i>{username}
              </a>
            </div>
          </div>
        
        </div>
        </div>
    );
}

export default UserList;
