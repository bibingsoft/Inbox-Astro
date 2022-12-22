import React from "react";
function ProductsListing(props) {

    return (
      
 <div class="bg-white shadow rounded mt-4 p-3">
        <div class="d-flex gap-2 align-items-center">
          <div>
           <img width="30" height="30" src={props.logo} alt=""/>

          </div>
          <div class="text-primary fw-500">{props.name}</div>
        </div>

        <div class="d-flex flex-column gap-2 mt-2">
          <div class="text-secondary">
        {props.desc} <a class="fs-12" href="#">Know more</a>
          </div>

          <div>
            <a href="#" class="fw-500">Start your 15 days free trial</a>
          </div>
        </div>

     
      </div>
    )
}

export default ProductsListing;



