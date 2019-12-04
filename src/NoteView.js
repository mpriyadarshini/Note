import React from 'react';
import './NoteView.scss';
function NoteView({ title, date, children }) {
    return (
        <div className="note-view">
            <div className="container">
                <input type="text" name="title" className="title" />
                <textarea name="content" className="content"></textarea>
            </div>
        </div>
    )
}
export default NoteView;
