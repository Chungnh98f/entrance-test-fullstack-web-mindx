class BookItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("book-item").content.cloneNode(true)
    );
    this.$item = this._shadowRoot.querySelector("li");
    this.$deleteBtn = this._shadowRoot.querySelector("button");
    this.$content = this._shadowRoot.querySelector("span");

    this.$deleteBtn.addEventListener("click", (e) => {
      this.dispatchEvent(new CustomEvent("delete", { detail: this.index }));
    });
  }

  static get observedAttributes() {
    return ["name", "author", "archived", "index"];
  }

  set index(newVal) {
    this.setAttribute("index", newVal);
  }

  get index() {
    return this.getAttribute("index");
  }

  set name(newVal) {
    this.setAttribute("name", newVal);
  }

  get name() {
    return this.getAttribute("name");
  }

  set author(newVal) {
    this.setAttribute("author", newVal);
  }

  get author() {
    return this.getAttribute("author");
  }

  set archived(newVal) {
    this.setAttribute("archived", newVal);
  }

  get archived() {
    return this.getAttribute("archived");
  }

  connectedCallback() {
    this.$content.innerHTML = `${this.name} - ${this.author}`;
  }
}

customElements.define("book-item", BookItem);
