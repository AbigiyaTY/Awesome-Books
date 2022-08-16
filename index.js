import BookList from './modules/addBook.js';
import display from './modules/display.js';
import time from './modules/time.js';

const myList = new BookList('add-button');
myList.addButton.onclick = BookList.addBook;

document.getElementById('list').onclick = () => {
  display('list', 'add-new', 'contact');
};
document.getElementById('add-new').onclick = () => {
  display('add-new', 'list', 'contact');
};
document.getElementById('contact').onclick = () => {
  display('contact', 'add-new', 'list');
};
setInterval(time, 1000);