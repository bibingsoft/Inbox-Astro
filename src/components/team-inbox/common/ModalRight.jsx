import React from "react";

function ModalRight(props) {

  return (
    <div className="modal resolve-modal" id="rightModal">
    <div className="modal-dialog modal-dialog-right fadeInRight animated ml-auto modal-custom-dialog">
      <div className="modal-content modal-custom-content">

        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title text-dark fw-500 fs-5">{props.title}
          </h4>

          <a href="#" type="button" className="btn-close" data-bs-dismiss="modal"></a>

        </div>

        {/* <!-- Modal body --> */}
        <div className="modal-body">
          <div className="d-flex flex-wrap">
            <p className="fs-6 text-secondary">{props.subhead}
            </p>
          </div>
         






         
        </div>

        {/* <!-- Modal footer --> */}
        <div className="modal-footer modal-custom-footer">
          <button type="button" className="btn bg-black me-3">Save</button>
          <button type="button" className="btn light-btn" data-bs-dismiss="modal">Cancel</button>
        </div>

      </div>
    </div>
  </div>
  )
}







export default ModalRight;
