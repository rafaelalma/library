const myLibrary = [];

function Book(title, author, isRead) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author} is ${
    this.isRead ? "read" : "not read yet"
  }`;
};

function addBookToLibrary(book) {
  myLibrary.push(book);

  return myLibrary;
}

const eloquentJS = new Book("Eloquent JavaScript", "Marijn Haverbeke", true);
const jsGoodParts = new Book(
  "JavaScript: The Good Parts",
  "Douglas Crockford",
  true
);

addBookToLibrary(eloquentJS);
addBookToLibrary(jsGoodParts);

const cardTemplateContent = document.getElementById("card-template").content;
const cardGrid = document.getElementById("card-grid");
const cardGridFragment = document.createDocumentFragment();

function displayBooks(books) {
  books.forEach((book) => {
    cardTemplateContent.querySelector("#title").textContent = book.title;
    cardTemplateContent.querySelector("#author").textContent = book.author;
    cardTemplateContent.querySelector("#isRead").textContent = `${
      book.isRead ? "Read" : "Not read"
    }`;

    const cardTemplateClone = cardTemplateContent.cloneNode(true);

    cardGridFragment.appendChild(cardTemplateClone);
  });

  cardGrid.appendChild(cardGridFragment);
}

displayBooks(myLibrary);
