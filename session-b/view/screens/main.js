import { addBook, removeBook } from "./../../controllers/update.js";

class MainScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("mainScreen").content.cloneNode(true)
    );
    this.$form = this._shadowRoot.getElementById("form");
    this.$nameInput = this._shadowRoot.getElementById("book-input");
    this.$authorInput = this._shadowRoot.getElementById("author-input");
    this.$list = this._shadowRoot.getElementById("list");
    this.bookList = [];
    this.$form.addEventListener("submit", (e) => {
      e.preventDefault();
      addBook(this.$nameInput.value, this.$authorInput.value);
      this.$authorInput.value = "";
      this.$nameInput.value = "";
      this.render();
    });
  }

  render() {
    this.$list.innerHTML = "";
    this.bookList.forEach((item, index) => {
      const book = document.createElement("book-item");
      book.index = index;
      book.name = item.name;
      book.author = item.author;
      book.archived = item.archived;
      book.addEventListener("delete", this.deleteBook.bind(this));
      this.$list.appendChild(book);
    });
  }

  deleteBook(e) {
    const book = this.bookList[e.detail];
    removeBook(book.id);
    this.render();
  }

  async connectedCallback() {
    await db.collection("books").onSnapshot((snapshot) => {
      this.bookList = [];
      snapshot.forEach((doc) => {
        const book = doc.data();
        book.id = doc.id;
        this.bookList.push(book);
      });
      this.render();
    });
  }
}

customElements.define("main-screen", MainScreen);
