import React from 'react';
import { useState } from 'react';

export default function Input (props) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAddMessage = (e) => {
        e.preventDefault();
        setText('');
       props.onSendMessage(text);
    }

    return (
        <div className="Input">
            <form onSubmit={handleAddMessage}>
                <input placeholder="Enter message..." autoFocus={true} value={text} onChange={handleChange} />
                <button disabled={!text} className={!text ? "button-disabled" : "button-active"}>Send</button>
            </form>
        </div>
    )
}