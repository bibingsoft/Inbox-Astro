import React from "react";

function ChatRight({ userName, time, chatSupport }) {
    return (
        <div className="chat-right">
                                  <div className="d-flex  align-items-start">
                                    <div className="chat-cvr d-flex align-items-end w-100 justify-content-end">
                                      <div className="d-flex flex-column align-items-end">
                                        <span className="text-mist-gray text-secondary d-block ps-4 "> <span className="tick h-3 w-3 d-inline-block me-1"></span> {userName}, {time}</span>
                                        <div className="d-flex w-100 justify-content-end align-items-center mt-2">
            
                                          <div className="chat-border bg-cyan-blue p-3 d-flex flex-column align-items-end gap-2 mb-1">
                                            <span> {chatSupport}</span>
                                          </div>
                                        </div>
            
                                      </div>
                                    </div>
                                  </div>
                                </div>
                             
    );
}

export default ChatRight;
