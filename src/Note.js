import React from 'react';
import './Note.css';

function Note({ title, date }) {
    return (
        <div className="note">
            <div className="heading">
                {title}
            </div>
            <p className="time">{date}</p>
        </div>
    )
}

export default Note;
