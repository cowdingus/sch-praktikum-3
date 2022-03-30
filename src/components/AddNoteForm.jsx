function AddNoteForm({handleSubmit, handleClose}) {
  function invokeSubmitHandler(event) {
    event.preventDefault();

    if (!event.target.title.value || !event.target.date.value) {
      return handleClose();
    }

    handleSubmit({
      title: event.target.title.value,
      date: event.target.date.value
    });

    handleClose();
  }

  function invokeCloseHandler(event) {
    event.preventDefault();

    handleClose();
  }

  return (
    <div className="fixed z-20 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-30">
      <form className="flex flex-col items-stretch min-w-[300px] bg-white border rounded-md p-4" id="add-note-form" onSubmit={invokeSubmitHandler}>
        <input
          type="text"
          name="title"
          className="p-2 text-lg font-semibold"
          placeholder="Title"
          required
        />
        <input
          type="date"
          name="date"
          placeholder="DD-MM-YYYY"
          className="p-2 invalid:text-gray-400"
          required
        />
        <div className="flex flex-row-reverse p-2 text-2xl gap-2">
          <button type="submit" form="add-note-form">
            <i className="ri-check-line"></i>
          </button>
          <button onClick={invokeCloseHandler}>
            <i className="ri-close-line"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNoteForm;
