

import React from "react";

function UserList({ userimage,title, subtitle, time, username, socialmedia }) {
    return (
        <div className="card rounded border-0 position-relative p-4">
        <div className="new-message-dot ">
        
          <i className="card-circle-org bg-blue float-end mt-1"></i>
        </div>
        <div className="d-flex">               
          <div className="card-round d-flex flex-nowrap">
            <div className="card-holder card-holder-sm">
              <img className="card-user-sm" src={userimage} alt="# "/>
            </div>
          </div>
          <div className="ps-3 w-100">
            <div className="d-flex">
              <div>
                <span className="card-name fs-6 d-block fw-500 text-primary">{title}</span>
                <span className="card-message card-truncate">{subtitle}</span>
              </div>
        
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="card-time">{time}</span>
              <a className="card-chat-medium chat-widget ms-auto">
                <i><img className="me-1" src={socialmedia}/></i>{username}
              </a>
            </div>
          </div>
        
        </div>
        </div>
    );
}

export default UserList;
