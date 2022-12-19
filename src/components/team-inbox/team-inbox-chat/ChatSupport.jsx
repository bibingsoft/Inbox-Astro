import React from "react";

function ChatRight({ username, time, chatsupport }) {
    return (
        <div className="chat-right">
                                  <div className="d-flex  align-items-start">
                                    <div className="chat-cvr d-flex align-items-end w-100 justify-content-end">
                                      <div className="d-flex flex-column align-items-end">
                                        <span className="name text-secondary d-block ps-4 "> <span className="tick d-inline-block me-1"></span> {username}, {time}</span>
                                        <div className="d-flex w-100 justify-content-end align-items-center mt-2">
            
                                          <div className="box-blueright d-flex flex-column align-items-end gap-2 mb-1">
                                            <span> {chatsupport}</span>
                                          </div>
                                        </div>
            
                                      </div>
                                    </div>
                                  </div>
                                </div>
                             
    );
}

export default ChatRight;
