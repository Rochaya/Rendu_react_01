import React, { useState, useEffect } from 'react';
import NoteDisplay from './components/noteDisplay';
import MarkdownInput from './components/markDownInput';
import './App.css';

const App = () => {
    const [note, setNote] = useState({ noteTitle: '', noteContent: '' });
    const [notes, setNotes] = useState(() => {
        const storageNotes = localStorage.getItem('notes');
        return storageNotes ? JSON.parse(storageNotes) : []; // ternaire permettant la recup des notes deja save pour les afficher au 1er rendu 
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNote({
            ...note,
            [name]: value,
        });
    };
    
    // save de la note
    const handleSave = () => {
        if (note.noteTitle && note.noteContent) {
            const newNote = { ...note };
            setNotes([...notes, newNote]);
            setNote({ noteTitle: '', noteContent: '' });
        }
    };

    //supp de la note
    const handleDeleteNote = (noteToDelete) => {
        const updatedNotes = notes.filter((note) => note !== noteToDelete);
        setNotes(updatedNotes);
    };
      

    // LOCALSTORAGE

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
        // console.log(notes);
    }, [notes]);

    useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes && !notes.length) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

    return (
        <>
            {notes.map((note, index) => (
                <NoteDisplay key={index} note={note} handleDelete={handleDeleteNote}/>
            ))}
            <MarkdownInput
                noteTitle={note.noteTitle}
                noteContent={note.noteContent}
                handleInputChange={handleInputChange}
                handleSave={handleSave}
            />
        </>
    );
};

export default App;
