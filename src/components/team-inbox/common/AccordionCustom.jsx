import React from "react";

function AccordionCustom(props) {

  return (
      <div className="sidebar">
          <div className="accordion accordion-custom-right mt-2" id={props.id}>
                      <div className="accordion-item acc-card shadow-sm bg-white border-0 rounded mb-3 p-2 fs-6 position-relative">
                        <div className="accordion-header bg-white" id="headingUpdate">
                          <a className="accordion-button collapsed head d-flex align-items-center bg-white" type="button"
                            data-bs-toggle="collapse" data-bs-target={props.collapseTarget} aria-expanded="false"
                            aria-controls={props.collapseId}>
                            <div className="d-flex align-items-center">
                              <div className="d-flex align-items-center justify-content-center me-3 "><img src={props.image}/></div>
                              <span className="text-primary d-block fs-6 fw-500">{props.title}</span>
                            </div>
                          </a>
                        </div>
                        <div id={props.collapseId} className="accordion-collapse collapse" aria-labelledby="headingUpdate"
                          data-bs-parent={props.parent}>
                          <div className="accordion-body acc-card-content">                           
                             {props.children}
                          </div>
                        </div>
                      </div>
  
                    </div>
         
      </div>
  )
}







export default AccordionCustom;
