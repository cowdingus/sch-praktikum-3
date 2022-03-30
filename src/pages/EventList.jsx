import NoteCard from "../components/NoteCard";

import React, { useState, useRef, useEffect } from "react";
import Masonry from "react-masonry-css";

import AddNoteForm from "../components/AddNoteForm";
import EditNoteForm from "../components/EditNoteForm";

import NoteController from "../controllers/NoteController";
import WebStorage from "../storages/WebStorage";

function useNotes(noteModel) {
  const [notes, setNotes] = useState([]);
  const noteController = useRef(new NoteController(noteModel, setNotes));

  useEffect(() => {
    setNotes(noteController.current.read());
  }, []);

  return [notes, noteController.current];
}

export default function EventList() {
  const [popUpStack, setPopUpStack] = useState([]);

  const pushPopUp = (element) => {
    setPopUpStack([...popUpStack, element]);
  };
  const popPopUp = () => {
    setPopUpStack(popUpStack.slice(0, -1));
  };

  function openAddNoteForm() {
    pushPopUp(
      <AddNoteForm
        key="1"
        handleSubmit={(note) => {
          noteController.add(note);
        }}
        handleClose={popPopUp}
      />
    );
  }

  function openEditNoteForm(note) {
    pushPopUp(
      <EditNoteForm
        key="2"
        handleSubmit={(note) => {
          noteController.put(note);
        }}
        handleClose={popPopUp}
        handleDelete={(note) => {
          noteController.delete(note.id);
        }}
        note={note}
      />
    );
  }

  const [notes, noteController] = useNotes(new WebStorage("notes"));

  return (
    <React.Fragment>
      {popUpStack}
      <main className="p-6 grow">
        <h1 className="text-2xl font-bold">Agenda Hari Lingkungan</h1>
        <Masonry
          breakpointCols={{
            default: 5,
            1100: 4,
            700: 3,
            500: 1,
          }}
          className="flex mt-4 gap-5 grow"
          columnClassName=""
        >
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              handleClick={openEditNoteForm}
            />
          ))}
        </Masonry>
        <button 
          className="fixed flex items-center justify-center w-12 h-12 text-4xl bg-white rounded-full shadow bottom-8 right-8 hover:scale-[1.07] transition-transform"
          onClick={openAddNoteForm}
        >
          <i className="ri-add-line"></i>
        </button>
      </main>
    </React.Fragment>
  );
}
