import React, { useState } from 'react';
import Note from './Note';
import './NoteList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const NoteList = ({ notes, onAddNote, onEditNote, onDeleteNote }) => {
  const [newNoteTitle, setNewNoteTitle] = useState('');

  const handleAddNote = () => {
    onAddNote(newNoteTitle);
    setNewNoteTitle('');
  };

  const handleTitleChange = (event) => {
    setNewNoteTitle(event.target.value);
  };

  return (
    <div className="note-list">
      <button className='add-note-button' onClick={handleAddNote}>
        <i className="fa-regular fa-clipboard"></i>
        <h3 button-text> Add</h3>
      </button>

      <div className="container">
        {notes.map((note) => (
          <div className="box" key={note.id}>
            <Note
              title={note.title}
              content={note.content}
              onEdit={(editedTitle, editedContent) => onEditNote(note.id, editedTitle, editedContent)}
              onDelete={() => onDeleteNote(note.id)}
            />
          </div>
        ))}
      </div>

      {/* <input className='title-input-box' type="text" value={newNoteTitle} onChange={handleTitleChange} placeholder="Enter note title..." /> */}
    </div>
  );
};

export default NoteList;
