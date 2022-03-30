function Item({id, creationDate = Date(), editDate = Date(), ...data}) {
  this.id = id;

  Object.entries(data).forEach(([key, value]) => {
    this[key] = value;
  });

  this.creationDate = new Date(creationDate);
  this.editDate = new Date(editDate);
}

class WebStorage {
  constructor(storageKey) {
    this.storageKey = storageKey ?? "undefined";
    this.storage = localStorage;

    if (!this.storage.getItem(`last-${this.storageKey}-id`)) {
      this._setItems([]);
      this._setLastItemId(0);
    }
  }

  _getItems() {
    return (JSON.parse(this.storage.getItem(this.storageKey))).map(item => new Item(item));
  }

  _getLastItemId() {
    return JSON.parse(this.storage.getItem(`last-${this.storageKey}-id`));
  }

  _setItems(items) {
    return this.storage.setItem(this.storageKey, JSON.stringify(items));
  }

  _setLastItemId(id) {
    return this.storage.setItem(`last-${this.storageKey}-id`, JSON.stringify(id));
  }

  read(id) {
    const items = this._getItems();

    if (id === undefined) {
      return items;
    }

    for (let item of items) {
      if (item.id === id) return item;
    }
  }

  add({...data}) {
    const items = this._getItems();
    const lastItemId = this._getLastItemId();

    const creationDate = new Date();
    const editDate = new Date();

    this._setItems([...items, new Item({id: lastItemId + 1, creationDate, editDate, ...data})]);
    this._setLastItemId(lastItemId + 1);

    return lastItemId;
  }

  put({id, ...data}) {
    let items = this._getItems();

    const editDate = new Date();

    const index = items.findIndex(item => item.id == id);
    items[index] = {...items[index], ...data, editDate};

    this._setItems(items);
  }

  delete(id) {
    const items = this._getItems();

    this._setItems(items.filter((item) => {
      return item.id != id;
    }));
  }

  clear() {
    this._setItems([]);
    this._setLastItemId(0);
  }
}

export {Item};
export default WebStorage;
