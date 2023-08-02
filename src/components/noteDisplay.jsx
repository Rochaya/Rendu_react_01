import React from 'react';
// Affichage des notes.

const NoteDisplay = ({ note, handleDelete }) => {
    return (
        <div className='note-display'>
            <h2 dangerouslySetInnerHTML={{ __html: note.noteTitle }}></h2>
            <div className='note-txt'>
              <pre dangerouslySetInnerHTML={{ __html: note.noteContent }}></pre>
            </div>
            <button className='btn-supp' onClick={() => handleDelete(note)}>Supprimer</button>
        </div>
    );  
};

export default NoteDisplay;
