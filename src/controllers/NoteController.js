export default class NoteController {
  constructor(storage, setNotesFn) {
    this.storage = storage;
    this.setNotesFn = setNotesFn;
  }

  read(id) {
    try {
      return this.storage.read(id);
    } catch (e) {
      console.error("Failed to read note with id " + id + ": " + e.message);
    }
  }

  add(note) {
    try {
      const insertId = this.storage.add(note);
      this.setNotesFn(this.storage.read());
      return insertId;
    } catch (e) {
      console.error("Failed to add note: " + e.message);
    }
  }

  put(note) {
    try {
      this.storage.put(note);
      this.setNotesFn(this.storage.read());
    } catch (e) {
      console.error("Failed to update note: " + e.message);
    }
  }

  delete(id) {
    try {
      this.storage.delete(id);
      this.setNotesFn(this.storage.read());
    } catch (e) {
      console.error("Failed to remove note with id " + id + ": " + e.message);
    }
  }

  clear() {
    try {
      this.storage.clear();
      this.setNotesFn(this.storage.read());
    } catch (e) {
      console.error("Failed to clear notes: " + e.message);
    }
  }
}

