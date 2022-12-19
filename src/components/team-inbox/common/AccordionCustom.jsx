import React from "react";

function AccordionCustom({ title, image }) {
    return (
        <div className="accordion accordion-custom-right mt-2" id="accordionExample">
                      <div className="accordion-item acc-card bg-white border-0 rounded mb-4 p-2 fs-6 position-relative">
                        <div className="accordion-header bg-white" id="headingUpdate">
                          <a className="accordion-button collapsed head d-flex align-items-center bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseUpdate" aria-expanded="false"
                            aria-controls="collapseUpdate">
                            <div className="d-flex align-items-center">
                              <div className="acc-card-ico-cvr"><img src={image}/></div>
                              <span className="acc-card-head">{title}</span>
                            </div>
                          </a>
                        </div>
                        <div id="collapseUpdate" className="accordion-collapse collapse" aria-labelledby="headingUpdate"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body acc-card-content">
                            <a href="#" className="card-chat-medium chat-fb bg-white">
                              <i><img className="me-2" src="/assets/facebook.svg"/></i>Amanda_hug
                            </a>
                            <span className="d-block my-2 mt-4"><label>Created on:</label> 13/03/2022 11:31 AM</span>
                            <span className="d-block my-2"><label>Due in:</label> 13/03/2022 11:31AM</span>
                          </div>
                        </div>
                      </div>
  
                    </div>
    );
}

export default AccordionCustom;
