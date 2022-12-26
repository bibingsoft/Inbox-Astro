import React from "react";

function chatLeft({ userName, time, chatCustomer }) {
    return (
        <div className="chat-left">
                                  <div className="d-flex flex-row gap-2">
                                    <div className="user-ico-div rounded-circle">
                                      <div className=" h-4 w-4 d-flex align-items-center justify-content-center rounded-circle bg-light-grey me-1">
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0.779298 3.99813C0.779022 3.58682 0.859885 3.1795 1.01725 2.79948C1.17462 2.41947 1.40541 2.07423 1.69639 1.78354C1.98738 1.49284 2.33285 1.2624 2.71302 1.10541C3.09319 0.948425 3.5006 0.86797 3.91191 0.868657H8.08872C9.81844 0.868657 11.2213 2.27572 11.2213 3.99813V10.2665H3.91191C2.18218 10.2665 0.779298 8.85942 0.779298 7.13701V3.99813ZM7.04452 5.04547V6.08967H8.08872V5.04547H7.04452ZM3.91191 5.04547V6.08967H4.95611V5.04547H3.91191Z" fill="#4B4A60"></path>
                                        </svg>
            
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column pt-1">
                                      <div className="text-mist-gray d-block">{userName}, {time}</div>
                                      <div className="d-flex mt-2  align-items-start">
            
                                        <div className="chat-cvr d-flex align-items-start flex-column w-100">
                                          <div className="chat-border bg-chat-blue p-3 d-flex flex-column align-items-end gap-2 mb-1">
                                            <span> {chatCustomer}</span>
            
                                          </div>
                                         
            
                                        </div>
                                      </div>
                                    </div>
                                  </div>
            
            
                                </div>
                             
    );
}

export default chatLeft;
