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

  function clearNotes() {
    const shouldClear = window.confirm("Are you sure to clear all the agendas? It will be filled again with sample data if you do, but you need to refresh the page first");
    if (shouldClear) noteController.clear();
  }

  if (noteController.read().length === 0) {
    console.log("Array is empty, filling in with sample data");
    noteController.add({ title: "Hari Peringatan Laut dan Samudera nasional", date: "2022-01-15"});
    noteController.add({ title: "Hari Lahan Basah Sedunia", date: "2022-02-02" });
    noteController.add({ title: "Hari Peduli Sampah Nasional", date: "2022-02-21" });
    noteController.add({ title: "Hari Hutan Sedunia", date: "2022-03-21" });
    noteController.add({ title: "Hari Air Sedunia", date: "2022-03-22" });
    noteController.add({ title: "Hari Meteorologi Sedunia", date: "2022-03-23" });
    noteController.add({ title: "Hari Bumi", date: "2022-04-22" });
    noteController.add({ title: "Hari Burung Migratori Internasional", date: "2022-05-03" });
    noteController.add({ title: "Hari Surya", date: "2022-05-03" });
    noteController.add({ title: "Hari Biodiversitas Dunia", date: "2022-05-22" });
    noteController.add({ title: "Hari Anti Tembakau Internasional", date: "2022-05-31" });
    noteController.add({ title: "Hari Lingkungan Hidup Sedunia PBB", date: "2022-06-05" });
    noteController.add({ title: "Hari Melawan Desertifikasi dan Kekeringan Dunia PBB", date: "2022-06-17" });
    noteController.add({ title: "Hari Populasi Dunia PBB", date: "2022-07-11" });
    noteController.add({ title: "Hari Perlindungan Lapisan Ozon Sedunia", date: "2022-09-16" });
    noteController.add({ title: "Hari Emisi Nol", date: "2022-09-20" });
    noteController.add({ title: "Hari Bebas Mobil", date: "2022-09-22" });
  }

  return (
    <React.Fragment>
      {popUpStack}
      <main className="p-6 grow">
        <div className="flex flex-wrap items-center">
          <h1 className="text-2xl font-bold grow">Agenda Hari Lingkungan</h1>
          <button 
            className="fixed flex items-center justify-center md:static bottom-8 left-8 w-12 h-12 md:w-10 md:h-10 text-4xl md:text-2xl bg-white rounded-full shadow hover:scale-[1.07] transition-transform flex-wrap z-10"
            onClick={clearNotes}
          >
            <i className="ri-delete-bin-line"></i>
          </button>
        </div>
        <Masonry
          breakpointCols={{
            default: 5,
            1100: 4,
            700: 3,
            500: 1,
          }}
          className="flex mt-4 gap-4 grow"
          columnClassName=""
        >
          {notes.map((note) => (
            <div className="mb-4">
              <NoteCard
                key={note.id}
                note={note}
                handleClick={openEditNoteForm}
              />
            </div>
          ))}
        </Masonry>
        <div className="h-14 md:hidden"></div>
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
