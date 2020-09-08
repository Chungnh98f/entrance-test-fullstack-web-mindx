function addBook(name, author) {
  const newBook = {
    name: name,
    author: author,
    archived: false,
  };
  db.collection("books").add(newBook);
}

function removeBook(id) {
  db.collection("books").doc(id).delete();
}

export { addBook, removeBook };
