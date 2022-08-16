import BookList from './modules/addBook.js';
import display from './modules/display.js';

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

// date and time

// export default date;
const datePlaceholder = document.getElementById('date');

// eslint-disable-next-line no-undef
datePlaceholder.innerHTML = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATETIME_FULL);