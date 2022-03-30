import {useState, useEffect} from 'react';

function EditNoteForm({note, handleSubmit, handleClose, handleDelete}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);

  useEffect(() => {
    setTitle(note.title);
    setDate(note.date);
  }, [note]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function invokeSubmitHandler(event) {
    event.preventDefault();

    handleSubmit({title, date, id: note.id});

    handleClose();
  }

  function invokeCloseHandler(event) {
    event.preventDefault();

    handleClose();
  }

  function invokeDeleteHandler(event) {
    event.preventDefault();

    handleDelete(note);

    handleClose();
  }

  return (
    <div className="fixed z-20 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-30">
      <form className="flex flex-col items-stretch min-w-[300px] bg-white border rounded-md p-4" onSubmit={invokeSubmitHandler}>
        <input
          type="number"
          name="id"
          value={note.id}
          hidden readOnly
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-2 text-lg font-semibold"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="DD-MM-YYYY"
          className="p-2 invalid:text-gray-400"
          value={date}
          onChange={handleDateChange}
          required
        />
        <div className="flex flex-row-reverse p-2 text-2xl gap-2">
          <button type="submit" value="submit">
            <i className="ri-check-line"></i>
          </button>
          <button onClick={invokeCloseHandler}>
            <i className="ri-close-line"></i>
          </button>
          <button onClick={invokeDeleteHandler}>
            <i className="ri-delete-bin-line"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditNoteForm;
