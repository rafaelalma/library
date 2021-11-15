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

const myLibrary = [eloquentJS, jsGoodParts];

const cardGrid = document.querySelector(".card-grid");

const addBookBtn = document.querySelector("#add-book-btn");
const newBookForm = document.querySelector(".new-book-form");

const newBookAuthor = document.querySelector("#new-book-author");
const newBookTitle = document.querySelector("#new-book-title");
const newBookIsRead = document.querySelector("#new-book-is-read");

const addBtn = document.querySelector("#add-btn");
const backBtn = document.querySelector("#back-btn");

function getBookCard(book, index) {
  return `<div class="card" data-index="${index}">
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button class="btn delete-btn">Delete</button>
      </div>`;
}

function displayBooks(books) {
  let html = "";

  books.forEach((book, index) => {
    html += getBookCard(book, index);
  });

  cardGrid.innerHTML = html;
}

function initializeLibrary(library) {
  displayBooks(library);

  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", deleteBook);
  });
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  const index = myLibrary.length - 1;

  cardGrid.insertAdjacentHTML("beforeend", getBookCard(book, index));

  cardGrid.lastElementChild
    .querySelector(".delete-btn")
    .addEventListener("click", deleteBook);
}

function updateCardsDataIndex() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.dataset.index = index;
  });
}

function deleteBook(event) {
  const cardToDelete = event.currentTarget.parentElement;
  const cardToDeleteIndex = cardToDelete.dataset.index;

  cardToDelete.remove();
  myLibrary.splice(cardToDeleteIndex, 1);
  updateCardsDataIndex();
}

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

initializeLibrary(myLibrary);
