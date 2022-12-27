

import React from "react";

function TicketList({ ticketNumber, userName,createdDate,dueDate, priority,bg,textColor }) {
    return (
        // <div className={`card card-${active} rounded border-0 position-relative p-4`}>
       
        // </div>
        <div class="existing-ticket-list mt-4 rounded-3 py-3 px-4 bg-titan-white ">
        <div class="d-flex align-items-center gap-3">
          <div class={`rounded-3 px-3 py-2 fw-500 text-${textColor} bg-${bg}`}>{ticketNumber} </div>
          <div class="fw-normal">Conversation with <span class="fw-500">{userName} </span> </div>
        </div>

        <div class="d-flex">
          <div class="d-flex flex-column mt-3 gap-2">
            <div><span class="text-primary">Created at </span> 
              <span class="text-secondary">{createdDate}</span>
            </div>
            <div><span class="text-primary"> Due in </span> 
              <span class="text-secondary">{dueDate}</span>
            </div>
          </div>
          <div class="ms-auto d-flex align-items-center mt-5">
            <span class="badge bg-gray-blue d-inline-block h-2 w-2 rounded-circle"></span><span class="text-gray-blue ms-2">{priority}</span>
            </div>
        </div>
      </div>
    );
}

export default TicketList;
