import React from "react";   
import { useEffect, useRef } from "react";


function Messages({messages, currentMember}) {

    const endList = useRef(null);

    useEffect(() => {
        endList.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages])
    
    const renderMessage = (message) => {
        const { member, text } = message;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";

        return (
            <li className={className} key={Math.random()}>
            <span
              className='icon'
              style={{ backgroundColor: member.clientData.color }}
            />
            <div className='Message-content'>
              <div className='username'>{member.clientData.username}</div>
              <div className='text' ref={endList}>
                {text}
              </div>
            </div>
          </li>
        );
    };

    return (
        <ul className="Messages-list">
            {messages.map((m) => renderMessage(m))}
            
        </ul>
    );
}

export default Messages;