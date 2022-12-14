import React from "react";

function ChatRight({ username, time, chatsupport }) {
    return (
        <div className="chat-right">
                                  <div className="d-flex  align-items-start">
                                    <div className="chat-cvr d-flex align-items-end w-100 justify-content-end">
                                      <div className="d-flex flex-column align-items-end">
                                        <span className="name"> <span className="tick"></span> {username}, {time}</span>
                                        <div className="d-flex w-100 justify-content-end align-items-center mt-2">
            
                                          <div className="box-blueright">
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
