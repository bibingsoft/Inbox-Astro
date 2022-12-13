import React from "react";

function SideNav() {
    return (
    
   
    <aside className="left-navbar position-fixed d-flex flex-column align-items-center flex-shrink-0 bg-dark-nav  d-none d-md-block">

      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item mb-4 mt-3">
          <a href="#" className="nav-link nav-link-side nav-logo py-3" aria-current="page" data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-title="Home">
            <img src="/assets/switcher.svg" />
          </a>
        </li>

        <li className="nav-item mb-4">
          <a href="#" className="nav-link nav-link-side nav-logo py-3" aria-current="page"  data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-title="Home">
            <img src="/assets/g-logo.svg" />
          </a>
        </li>
        <li className="mb-4">
            <div className="divider"></div>
        </li>
        <li className="nav-item mb-4">
          <a href="#" className="nav-link nav-link-side  py-3" aria-current="page"  data-bs-toggle="tooltip"
            data-bs-placement="right" data-bs-title="Home">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.82812 10.0625C8.61442 10.0625 10.0625 8.61442 10.0625 6.82812C10.0625 5.04183 8.61442 3.59375 6.82812 3.59375C5.04183 3.59375 3.59375 5.04183 3.59375 6.82812C3.59375 8.61442 5.04183 10.0625 6.82812 10.0625Z"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M16.1719 10.0625C17.9582 10.0625 19.4062 8.61442 19.4062 6.82812C19.4062 5.04183 17.9582 3.59375 16.1719 3.59375C14.3856 3.59375 12.9375 5.04183 12.9375 6.82812C12.9375 8.61442 14.3856 10.0625 16.1719 10.0625Z"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M6.82812 19.4062C8.61442 19.4062 10.0625 17.9582 10.0625 16.1719C10.0625 14.3856 8.61442 12.9375 6.82812 12.9375C5.04183 12.9375 3.59375 14.3856 3.59375 16.1719C3.59375 17.9582 5.04183 19.4062 6.82812 19.4062Z"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M16.1719 19.4062C17.9582 19.4062 19.4062 17.9582 19.4062 16.1719C19.4062 14.3856 17.9582 12.9375 16.1719 12.9375C14.3856 12.9375 12.9375 14.3856 12.9375 16.1719C12.9375 17.9582 14.3856 19.4062 16.1719 19.4062Z"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </li>
        <li className="nav-item mb-4">
          <a href="#" className="nav-link nav-link-side active py-3"  data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-title="Dashboard">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.5 1.72383C18.5 0.771788 17.7282 0 16.7762 0H2.22383C1.27179 0 0.5 0.771788 0.5 1.72383V16.2762C0.5 17.2282 1.27179 18 2.22383 18H16.7762C17.7282 18 18.5 17.2282 18.5 16.2762L18.5 1.72383ZM2.24425 1.39683H16.8C16.9795 1.39683 17.1032 1.51854 17.1032 1.69804V9.89418H12.8839C12.4977 9.89418 12.1848 10.1938 12.1848 10.5799C12.1848 12.1027 10.9459 13.3349 9.42309 13.3349C7.93857 13.3349 6.72388 12.1543 6.66372 10.6843C6.66987 10.647 6.67305 10.6205 6.67305 10.5816C6.67305 10.1955 6.36002 9.89419 5.97388 9.89419H1.89683V1.69804C1.89683 1.51854 2.06476 1.39683 2.24425 1.39683ZM16.8 16.6032H2.24425C2.06476 16.6032 1.89683 16.4333 1.89683 16.2538V11.291H5.32183C5.6552 13.2487 7.36739 14.7519 9.42308 14.7519C11.4787 14.7519 13.1909 13.2487 13.5243 11.291H17.1032V16.2538C17.1032 16.4333 16.9795 16.6032 16.8 16.6032Z"
                fill="white" />
              <path
                d="M5.55463 4.6456H13.4552C13.8413 4.6456 14.1543 4.33334 14.1543 3.94719C14.1543 3.56104 13.8413 3.24878 13.4552 3.24878H5.55463C5.16848 3.24878 4.85547 3.56104 4.85547 3.94719C4.85547 4.33334 5.16848 4.6456 5.55463 4.6456Z"
                fill="white" />
              <path
                d="M5.55463 7.8624H13.4552C13.8413 7.8624 14.1543 7.55013 14.1543 7.16399C14.1543 6.77785 13.8413 6.46558 13.4552 6.46558H5.55463C5.16848 6.46558 4.85547 6.77785 4.85547 7.16399C4.85547 7.55013 5.16848 7.8624 5.55463 7.8624Z"
                fill="white" />
            </svg>
          </a>
        </li>
        <li className="nav-item mb-4">
          <a href="#" className="nav-link nav-link-side py-3" data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-original-title="Orders">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5 16.1719C13.4848 16.1719 15.0938 14.5629 15.0938 12.5781C15.0938 10.5934 13.4848 8.98438 11.5 8.98438C9.51523 8.98438 7.90625 10.5934 7.90625 12.5781C7.90625 14.5629 9.51523 16.1719 11.5 16.1719Z"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M17.6094 10.4219C18.4465 10.4205 19.2723 10.6147 20.0211 10.9891C20.7698 11.3635 21.4207 11.9076 21.9219 12.5781"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M1.07812 12.5781C1.57927 11.9076 2.23017 11.3635 2.97891 10.9891C3.72765 10.6147 4.55351 10.4205 5.39062 10.4219"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M6.32422 19.4061C6.79754 18.4368 7.53359 17.6199 8.44853 17.0485C9.36346 16.477 10.4205 16.1741 11.4992 16.1741C12.5779 16.1741 13.635 16.477 14.5499 17.0485C15.4648 17.6199 16.2009 18.4368 16.6742 19.4061"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M5.39159 10.4219C4.84592 10.4224 4.31135 10.2677 3.85036 9.97571C3.38937 9.68374 3.02099 9.2666 2.78827 8.77305C2.55554 8.27949 2.46808 7.7299 2.5361 7.18848C2.60412 6.64706 2.82482 6.13619 3.17241 5.71554C3.51999 5.29489 3.98011 4.98185 4.499 4.81299C5.01789 4.64413 5.57412 4.62643 6.1027 4.76195C6.63127 4.89747 7.11037 5.18062 7.484 5.57831C7.85763 5.97601 8.11037 6.47182 8.21268 7.00781"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M14.7891 7.00781C14.8914 6.47182 15.1441 5.97601 15.5177 5.57831C15.8914 5.18062 16.3705 4.89747 16.899 4.76195C17.4276 4.62643 17.9839 4.64413 18.5027 4.81299C19.0216 4.98185 19.4818 5.29489 19.8293 5.71554C20.1769 6.13619 20.3976 6.64706 20.4656 7.18848C20.5337 7.7299 20.4462 8.27949 20.2135 8.77305C19.9808 9.2666 19.6124 9.68374 19.1514 9.97571C18.6904 10.2677 18.1558 10.4224 17.6102 10.4219"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </li>
        <li className="nav-item mb-4">
          <a href="#" className="nav-link nav-link-side py-3 "  data-bs-toggle="tooltip" data-bs-placement="right"
            data-bs-title="Products">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.70312 14.375C12.6803 14.375 15.0938 11.9615 15.0938 8.98438C15.0938 6.00722 12.6803 3.59375 9.70312 3.59375C6.72597 3.59375 4.3125 6.00722 4.3125 8.98438C4.3125 11.9615 6.72597 14.375 9.70312 14.375Z"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M1.99414 17.9688C2.93863 16.8431 4.1182 15.9379 5.44995 15.3169C6.78169 14.6959 8.2333 14.374 9.70273 14.374C11.1722 14.374 12.6238 14.6959 13.9555 15.3169C15.2873 15.9379 16.4668 16.8431 17.4113 17.9688"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M19.7656 13.6562C20.5595 13.6562 21.2031 13.0127 21.2031 12.2188C21.2031 11.4248 20.5595 10.7812 19.7656 10.7812C18.9717 10.7812 18.3281 11.4248 18.3281 12.2188C18.3281 13.0127 18.9717 13.6562 19.7656 13.6562Z"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.7656 10.7812V9.70312" stroke="white" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M18.5172 11.5L17.5918 10.9609" stroke="white" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M18.5172 12.9375L17.5918 13.4766" stroke="white" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M19.7656 13.6562V14.7344" stroke="white" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M21.0137 12.9375L21.9391 13.4766" stroke="white" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M21.0137 11.5L21.9391 10.9609" stroke="white" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </a>
        </li>
        
      </ul>

    </aside>
   
    );
}

export default SideNav;
