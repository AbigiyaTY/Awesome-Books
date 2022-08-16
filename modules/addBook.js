import { removeBooks } from './removeBooks.js';

export default class BookList {
  constructor(id) {
    this.id = id;
    this.addButton = document.getElementById(this.id);
    if (localStorage.getItem('book list') === null) {
      localStorage.setItem('book list', JSON.stringify([]));
    } else {
      const bookLists = JSON.parse(localStorage.getItem('book list'));
      for (let i = 0; i < bookLists.length; i += 1) {
        const div = document.createElement('div');
        div.setAttribute('class', 'book-wrapper');
        div.innerHTML = BookList.newBook(bookLists[i].title, bookLists[i].author);
        document.getElementById('book-list').appendChild(div);
        removeBooks();
      }
    }
  }

  static addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    // check if title or author filed is empty
    if (title === '' || author === '') return;
    const div = document.createElement('div');
    div.innerHTML = BookList.newBook(title, author);
    div.setAttribute('class', 'book-wrapper');
    document.getElementById('book-list').appendChild(div);
    /// //remove  text from the form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    // Add remove functionality to new added book
    removeBooks();
    // important-->make sure to remove the text from both input fields
    BookList.addNewBookToLocalStorage(title, author);
  }

  static newBook(title, author) {
    return `
            <h4 class="title">"${title}" by</h2>
            <h4 class="author">${author}</h2>
            <button type="submit" class="remove-book" id="remove-book">Remove</button>
             `;
  }

  static addNewBookToLocalStorage(t, a) {
    const book = {
      title: t,
      author: a,
    };
    const arr = JSON.parse(localStorage.getItem('book list'));
    arr.push(book);
    localStorage.setItem('book list', JSON.stringify(arr));
  }
}