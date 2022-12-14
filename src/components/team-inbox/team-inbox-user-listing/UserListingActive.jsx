

import React from "react";

function UserListActive({ userimage,title, subtitle, time, username, socialmedia }) {
    return (
        <div className="card card-active">
        <div className="new-message-dot">
        
          <i className="card-circle-org float-end mt-1"></i>
        </div>
        <div className="d-flex">               
          <div className="card-round">
            <div className="card-holder card-holder-sm">
              <img className="card-user-sm" src={userimage} alt="# "/>
            </div>
          </div>
          <div className="ps-3 w-100">
            <div className="d-flex">
              <div>
                <span className="card-name">{title}</span>
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

export default UserListActive;
