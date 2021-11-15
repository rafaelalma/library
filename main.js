function Book(title, author, isRead) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;
}

const eloquentJS = new Book("Eloquent JavaScript", "Marijn Haverbeke", true);
const jsGoodParts = new Book(
  "JavaScript: The Good Parts",
  "Douglas Crockford",
  true
);

const myLibrary = [eloquentJS, jsGoodParts, eloquentJS, jsGoodParts];

const cardGrid = document.querySelector(".card-grid");

const addBookBtn = document.querySelector("#add-book-btn");
const newBookForm = document.querySelector(".new-book-form");

const newBookAuthor = document.querySelector("#new-book-author");
const newBookTitle = document.querySelector("#new-book-title");
const newBookIsRead = document.querySelector("#new-book-is-read");

const addBtn = document.querySelector("#add-btn");
const backBtn = document.querySelector("#back-btn");

function displayBooks(books) {
  let html = "";

  books.forEach((book) => {
    html += `<div class="card">
        <p>${book.title}</p>
        <p>${book.author}</p>
      </div>`;
  });

  cardGrid.innerHTML = html;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  displayBooks(myLibrary);
}

displayBooks(myLibrary);

addBookBtn.addEventListener("click", () => {
  newBookForm.classList.toggle("hide");
});

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const newBook = new Book(newBookTitle.value, newBookAuthor.value);
  addBookToLibrary(newBook);

  newBookTitle.value = "";
  newBookAuthor.value = "";
  newBookForm.classList.toggle("hide");
});

backBtn.addEventListener("click", (event) => {
  event.preventDefault();

  newBookForm.classList.toggle("hide");
});
