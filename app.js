// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class: UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "Joey Wheeler",
        isbn: "4569781235",
      },
      {
        title: "Book Two",
        author: "Jenny Wheeler",
        isbn: "7539514682",
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
    `;

    list.appendChild(row);
  }
}

// Store Class Handles Storage

// Event: Display book
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  //prevent submit
  e.preventDefault();

  //get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //instatiate book
  const book = new Book(title, author, isbn);

  // Add book to UI
  UI.addBookToList(book);

  // Clear fields
  UI.clearFields();
});

// Event: Remove a book
