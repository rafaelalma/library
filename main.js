function Book(title, author, isRead) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;
}

Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
};

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
        <button class="book-is-read">${
          book.isRead ? "Read" : "Not read"
        }</button>
        <button class="btn delete-btn">Delete</button>
      </div>`;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  const index = myLibrary.length - 1;

  cardGrid.insertAdjacentHTML("beforeend", getBookCard(book, index));

  cardGrid.lastElementChild
    .querySelector(".delete-btn")
    .addEventListener("click", deleteBook);

  cardGrid.lastElementChild
    .querySelector(".book-is-read")
    .addEventListener("click", toggleIsRead);
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

function toggleIsRead(event) {
  const cardToToggle = event.currentTarget.parentElement;
  const cardToToggleIndex = cardToToggle.dataset.index;

  const bookToToggle = myLibrary[cardToToggleIndex];
  bookToToggle.toggleRead();

  event.currentTarget.textContent = bookToToggle.isRead ? "Read" : "Not read";
}

addBookBtn.addEventListener("click", () => {
  newBookForm.classList.toggle("hide");
});

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const newBookIsReadValue = newBookIsRead.value === "yes" ? true : false;
  const newBook = new Book(
    newBookTitle.value,
    newBookAuthor.value,
    newBookIsReadValue
  );
  addBookToLibrary(newBook);

  newBookTitle.value = "";
  newBookAuthor.value = "";
  newBookIsRead.value = "no";
  newBookForm.classList.toggle("hide");
});

backBtn.addEventListener("click", (event) => {
  event.preventDefault();

  newBookForm.classList.toggle("hide");
});

const eloquentJS = new Book("Eloquent JavaScript", "Marijn Haverbeke", true);
const jsGoodParts = new Book(
  "JavaScript: The Good Parts",
  "Douglas Crockford",
  true
);

const myLibrary = [eloquentJS, jsGoodParts];

myLibrary.forEach((book) => addBookToLibrary(book));
