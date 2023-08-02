import React from 'react';

const MarkdownInput = ({ noteTitle, noteContent, handleInputChange, handleSave }) => {
    return (
        <div className='note-container'>
            <h2>Une nouvelle note ?</h2>
            <input
              type="text"
              id="note-input"
              name="noteTitle"
              placeholder="Titre de la note"
              value={noteTitle}
              onChange={handleInputChange}
            />
            <textarea
              name="noteContent"
              id="note-content"
              placeholder="Ta note ici ..."
              value={noteContent}
              onChange={handleInputChange}
            ></textarea>
            <button className='btn-note' onClick={handleSave}>Save</button>
        </div>
    );
};

export default MarkdownInput;


