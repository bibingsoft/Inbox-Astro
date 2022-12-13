import React from "react";

function ChatRight({ username, time, chattext }) {
    return (
        <div class="chat-right">
                                  <div class="d-flex  align-items-start">
                                    <div class="chat-cvr d-flex align-items-end w-100 justify-content-end">
                                      <div class="d-flex flex-column align-items-end">
                                        <span class="name"> <span class="tick"></span> {username}, {time}</span>
                                        <div class="d-flex w-100 justify-content-end align-items-center mt-2">
            
                                          <div class="box-blueright">
                                            <span> {chattext}</span>
                                          </div>
                                        </div>
            
                                      </div>
                                    </div>
                                  </div>
                                </div>
                             
    );
}

export default ChatRight;
