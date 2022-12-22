import React from "react";
import CircularProgressBlue from "../common/forms/CircularProgressBlue.jsx";
function Products({option, logo, productName,link,plan}) {

    return (
       
            <div className="d-flex align-items-center justify-content-center bg-white shadow rounded p-4">
                <div className="d-flex gap-3">
                    <div>
                        <img src={logo} alt="comm voice" />
                    </div>
                    <div className="d-flex align-items-start justify-content-start flex-column gap-1">
                        <div className="text-primary fw-500">{productName}</div>
                        <a className="fw-500"><a href="#">{link} <img src="/assets/right-arrows.svg" /></a>
                        </a>
                    </div>
                </div>
                <div className="ms-auto d-flex align-items-end justify-content-end flex-column gap-2">             
                      {option === 0 ? <div><span className=" px-3 py-1 text-blueberry bg-tropical-blue rounded">Plan: <span className="fw-500">Enterprise</span></span></div>  : null}
                     {option === 1 ? <div> <CircularProgressBlue value="12" dataPercentage="30" /> </div> : null }
                    

                    <div>
                        <a href="#">{plan}</a>

                    </div>
                </div>


            </div>
      
    )
}

export default Products;



