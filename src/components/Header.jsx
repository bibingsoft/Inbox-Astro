import React from "react";
import CircularProgressBar from "./CircularProgressBar.jsx";
function Header() {
    return (
        <nav className="nav-header header navbar navbar-expand-lg  bg-white ">
        <div className="container-fluid">
         <a class="hamberger"  data-bs-toggle="offcanvas" href="#offcanvasMobile" role="button" aria-controls="offcanvasMobile" >
          <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="7" y1="7" x2="29" y2="7" stroke="#555555" stroke-width="2" stroke-linecap="round"/>
<line x1="7" y1="23" x2="29" y2="23" stroke="#555555" stroke-width="2" stroke-linecap="round"/>
<line x1="7" y1="15" x2="22" y2="15" stroke="#555555" stroke-width="2" stroke-linecap="round"/>
</svg>

          </a> 
         
         
          <a className="navbar-brand nav-head" href="#">Team Inbox</a>
         
      
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="search-global">
                <div className="input-group  align-items-center">
                  <span className="border-0 search-global-icon ">
                    <a href="#"><img src="/assets/search-form.svg"/></a></span>
                  <input type="text" className="global-search" placeholder="Search"/>
      
                </div>
              </li>
            
            
            </ul>
            <div className="d-flex ms-auto">
             <CircularProgressBar value="12"/>
                 
                  <ul className="d-flex gap-5 align-items-center header-right-sec">
                    <li>
                      <div className="dropdown notification">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <img src="/assets/bell.svg"/>
                          <i className="count">2</i>
                        </a>
      
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown social">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          <img src="/assets/social.svg"/>
                        </a>
      
                        <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="avatar">
                        <span className="image"><img src="/assets/avatar-profile-icon.svg"/></span>
                      </div>
                    </li>
                    <li className="px-0 d-none d-md-block">
                      <div className="dropdown more">
                        <a data-bs-display="static"  className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                          data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="/assets/more.svg"/>
                        </a>
      
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </div>
                    </li>
                  
                  </ul>
              
              </div>
        </div>
      </nav>
      
    );
}

export default Header;
