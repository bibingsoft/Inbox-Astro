import React from "react";

function SideNavRight() {
    return (


        <aside className="w-lg-nav w-md-nav-md vh-100 position-fixed d-flex flex-column align-items-center flex-shrink-0 bg-white rounded-2  d-none d-lg-block">

            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item mb-4 mt-3" id="expand-left">
                    <a className="nav-link  bg-transparent nav-logo py-3 d-flex align-items-center justify-content-center m-auto p-0  h-6 w-6 text-decoration-none" href="#"
                    ><img src="/assets/right-nav.svg" />
                    </a>
                </li>

                {/* profile starts */}
                <li className="nav-item mb-3 mt-2 dropdown">
                    <a data-bs-toggle="dropdown" aria-expanded="false" className="nav-link  bg-transparent nav-logo py-3 d-flex align-items-center justify-content-center m-auto p-0  h-6 w-6 text-decoration-none" href="#"
                    ><img src="/assets/profile.svg" />
                    </a>
                    <ul className="dropdown-menu dropdown-nav-right" >
                        <div className="card box-grey overflow-hidden card p-4 bg-white border-0  mb-3 rounded position-relative mb-3">
                            <div className="collapseicon-right position-absolute">
                                <a id="collapse-right" href="#"><img src="/assets/preview.svg" />
                                </a>
                            </div>
                            <div className="d-flex flex-column align-items-center mb-4 text-center">
                                <div className="ps-3 w-100">
                                    <div className="d-flex flex-column align-items-center gap-3">
                                        <div className="d-flex flex-column">
                                            <div className="card-round">
                                                <div className="card-round">
                                                    <div className="avatar h-12 w-12 d-inline-flex align-items-center justify-content-center text-center text  text-uppercase bg-light-blue rounded-circle position-relative fs-3 "></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="card-name fs-6 d-block fw-500 text-primary">Gsoftcomm</span>
                                            <span className="text-gray-medium fs-6 d-block mt-2"><a href="#"><i className="me-1"><img src="/assets/location.svg" />
                                            </i>
                                            </a>Location</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-3">
                                <i className="me-2"><img src="/assets/mail.svg" /></i>
                                <a href="#">name@example.com</a>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="me-2"><img src="/assets/call.svg" /></i>
                                <a href="#" className="text-primary fw-500">+1 6573456228</a>
                            </div>
                            <div className="box-grey-footer bg-white rounded d-flex align-items-center p-3 mt-3">
                                <span><label className="text-secondary">Identifier:</label> 74474012152860</span>
                                <a href="#" className="ms-auto"><img src="/assets/duplicate.svg" />
                                </a>
                            </div>
                        </div>
                    </ul>
                </li>
                {/* profile ends */}

                {/* chat update starts */}
                <li className="nav-item mb-3 mt-2 dropdown">
                    <a data-bs-toggle="dropdown" aria-expanded="false" className="nav-link  bg-transparent nav-logo py-3 d-flex align-items-center justify-content-center m-auto p-0  h-6 w-6 text-decoration-none" href="#"
                    ><img src="/assets/chat-info.svg" />
                    </a>
                    <ul className="dropdown-menu dropdown-nav-right" >
                        <div class="p-3">
                            <span class="text-primary d-block mb-4 fs-6 fw-500">Chat Update</span>
                            <a href="#" class="text-contrast-blue fs-12 fw-normal bg-transparent align-items-center rounded-pill py-1 px-2 chat-widget bg-white">
                                <i><img class="me-2" src="/assets/facebook.svg" />
                                </i>Amanda_hug
                            </a><span class="d-block my-2 mt-4"><label class="text-primary">Last Seen: </label><span class="text-secondary">
                                13/03/2022 11:31 AM</span>
                            </span><span class="d-block my-2"><label class="text-primary">Created on: </label>
                                <span class="text-secondary">13/03/2022 11:31AM</span>
                            </span></div>
                    </ul>
                </li>
                {/* chat update ends */}

                {/* support desk starts */}

                <li className="nav-item mb-3 mt-2 dropdown">
                    <a data-bs-toggle="dropdown" aria-expanded="false" className="nav-link  bg-transparent nav-logo py-3 d-flex align-items-center justify-content-center m-auto p-0  h-6 w-6 text-decoration-none" href="#"
                    ><img src="/assets/support-2.svg" />
                    </a>
                    <ul className="dropdown-menu dropdown-nav-right" >
                        <div class="p-3">
                            <span class="text-primary d-block mb-4 fs-6 fw-500">Support desk</span>
                            <a href="#" class="d-flex align-items-center text-blue-badge"><i class="me-2"><img src="/assets/create-tckt.svg" />
                            </i> Create Ticket</a><div class="p-3 rounded-3 mt-4 bg-titan-white">
                                <div class="d-flex  align-items-center">
                                    <div><img class="me-3" src="/assets/help-support.svg" /></div>
                                    <div class="d-flex flex-column gap-2">
                                        <div class="fw-500">T12345 </div>
                                        <div>Conversation with Paige Turner</div>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <span class="d-block my-2"><label class="text-secondary">Created on:</label><span class="text-primary">12/03/2022 11:31AM</span> </span>
                                    <span class="d-block my-2"><label class="text-secondary">Due in:</label> <span class="text-primary">13/03/2022 11:31AM</span></span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mt-4">
                                    <span class="rounded-3 fw-semibold text-uppercase py-2 px-2 fs-11 d-flex align-items-center justify-content-center bg-hawkes-blue text-royal-blue">Open</span>
                                    <a href="#"> <span class="text-secondary"><i class="me-1"><img src="/assets/no-agent-icon.svg" /></i>
                                        No agent</span></a>


                                </div>
                            </div></div>
                    </ul>
                </li>
                {/* support desk Ends */}

                {/* Device properties start */}

                <li className="nav-item mb-3 mt-2 dropdown">
                    <a data-bs-toggle="dropdown" aria-expanded="false" className="nav-link  bg-transparent nav-logo py-3 d-flex align-items-center justify-content-center m-auto p-0  h-6 w-6 text-decoration-none" href="#"
                    ><img src="/assets/device-blue.svg" />
                    </a>
                    <ul className="dropdown-menu dropdown-nav-right" >
                        <div class="p-3">
                            <span class="text-primary d-block mb-4 fs-6 fw-500">Device properties</span>
                            <span class="d-block my-2"><label class="text-secondary">OS: </label><span class="text-primary">Web</span> </span><span class="d-block my-2"><label class="text-secondary">Browser: </label> <span class="text-primary">Chrome</span></span><span class="d-block my-2"><label class="text-secondary">Browser version:
                            </label> <span class="text-primary">103.0.0.0</span></span><span class="d-block my-2"><label class="text-secondary">Device: </label> <span class="text-primary">Desktop</span></span></div>
                    </ul>
                </li>
                {/* Device properties ends */}

                {/* Recent chat starts */}
                <li className="nav-item mb-3 mt-2 dropdown">
                    <a data-bs-toggle="dropdown" aria-expanded="false" className="nav-link  bg-transparent nav-logo py-3 d-flex align-items-center justify-content-center m-auto p-0  h-6 w-6 text-decoration-none" href="#"
                    ><img src="/assets/chat-recent.svg" />
                    </a>
                    <ul className="dropdown-menu dropdown-nav-right" >
                    <div class="p-3">
                            <span class="text-primary d-block mb-4 fs-6 fw-500">Recent conversations</span>
                            <a href="#" class="text-contrast-blue fs-12 fw-normal bg-transparent align-items-center rounded-pill py-1 px-2 chat-widget bg-white">
                            <i><img class="me-2" src="/assets/facebook.svg" />
                            </i>Amanda_hug
                        </a><span class="d-block my-2 mt-4">
                                Conversation with
                                <a class="fw-500" href="#">Paige Turner</a>
                            </span><span class="d-block my-2"><label class="text-primary">Duration: </label>
                                <span class="text-secondary">10 minutes</span>
                            </span><div class="d-flex mt-2">
                                <span class="rounded-3 fw-semibold text-uppercase py-2 px-2 fs-11 d-flex align-items-center justify-content-center bg-hawkes-blue text-royal-blue">Open</span>
                            </div></div>
                    </ul>
                </li>
                {/* Recent chat ends */}

                {/* timeline starts */}
                <li className="nav-item mb-3 mt-2 dropdown">
                    <a data-bs-toggle="dropdown" aria-expanded="false" className="nav-link  bg-transparent nav-logo py-3 d-flex align-items-center justify-content-center m-auto p-0  h-6 w-6 text-decoration-none" href="#"
                    ><img src="/assets/timeline-blue.svg" />
                    </a>
                    <ul className="dropdown-menu dropdown-nav-right" >
                    <div class="p-3">
                            <span class="text-primary d-block mb-4 fs-6 fw-500">Timeline</span>
                        <div class="sidebar-timeline">
                  <div class="user-timeline  user-date">
                    <div class="user-action p-3">

                    </div>
                  </div>
                  <div class="user-timeline user-history">
                    <div class="user-action p-1">
                      <div class="dark-charcoal">Sign into gsoftcomm</div>
                      <div class="santa-grey">5:30pm</div>

                    </div>
                  </div>

                  <div class="user-timeline user-history">
                    <div class="user-action  p-1">

                      <div class="dark-charcoal">Sign into gsoftcomm</div>
                      <div class="santa-grey">5:30pm</div>


                    </div>
                  </div>
                  <div class="user-timeline  user-date">
                    <div class="user-action p-3">

                    </div>
                  </div>
                  <div class="user-timeline user-history user-history-end">
                    <div class="user-action  p-1">
                      <div class="dark-charcoal">Ticket has resolved</div>
                      <div class="santa-grey">5:30pm</div>

                    </div>
                  </div>
                </div></div>
                    </ul>
                </li>
                {/* timeline ends */}

                {/* chat transcript starts  */}
                <li className="nav-item mb-3 mt-2 dropdown">
                    <a data-bs-toggle="dropdown" aria-expanded="false" className="nav-link  bg-transparent nav-logo py-3 d-flex align-items-center justify-content-center m-auto p-0  h-6 w-6 text-decoration-none" href="#"
                    ><img src="/assets/transcript-blue.svg" />
                    </a>
                    <ul className="dropdown-menu" >
                    <div class="p-3">
                            <span class="text-primary d-block mb-4 fs-6 fw-500">Chat transcript</span>
                        <div class="d-block mb-4"><label>Agent Steven Paul has joined the conversation</label> </div><span class="mb-3 w-10 rounded-pill  text-uppercase py-2 px-2 fs-11 d-flex align-items-center justify-content-center bg-hawkes-blue text-royal-blue">05:13:20</span><span class="d-block mb-4"><label><span class="text-primary fw-500">Paige Turner:</span>
                    Hello! Finally found the time to write to you I need your help in creating interactive
                    animations
                  </label> </span><span class="mb-3 w-10 rounded-pill  text-uppercase py-2 px-2 fs-11 d-flex align-items-center justify-content-center bg-hawkes-blue text-royal-blue">05:00:20</span><span class="d-block mb-4"><label><span class="text-primary fw-500">Paige Turner:</span>
                    Can I send you files?
                  </label> </span><span class="mb-3 w-10 rounded-pill  text-uppercase py-2 px-2 fs-11 d-flex align-items-center justify-content-center bg-hawkes-blue text-royal-blue">04:13:20</span><span class="d-block mt-4"><a href="#">The visitor has left the conversation</a></span><span class="d-block mb-3 mt-3 text-orange">The conversation is ended (05:19:50)</span></div>
                    </ul>
                </li>
                {/* chat transcript ends  */}


            </ul>

        </aside>

    );
}

export default SideNavRight;
