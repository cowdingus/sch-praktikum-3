function NoteCard({ note, handleClick }) {
  return (
    <div className="flex flex-col p-4 bg-white border shadow rounded-md hover:scale-[1.01] transition-transform" onClick={() => handleClick(note)}>
      <h2 className="text-lg font-semibold">{note.title}</h2>
      <div className="flex items-center mt-1 text-sm text-gray-700 gap-1">
        <i class="ri-time-line"></i>
        <div>{note.date}</div>
      </div>
    </div>
  );
}

export default NoteCard;
