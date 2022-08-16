export const removeBookFromLocalStorage = (e) => {
  const title = e.target.previousElementSibling.previousElementSibling.innerHTML;
  const arr = JSON.parse(localStorage.getItem('book list'));
  const index = arr.findIndex((object) => `"${object.title}" by` === title);
  arr.splice(index, 1);
  localStorage.setItem('book list', JSON.stringify(arr));
};

export const removeBooks = () => {
  const removeButton = document.getElementsByClassName('remove-book');
  removeButton[removeButton.length - 1].onclick = (e) => {
    removeBookFromLocalStorage(e);
    e.target.parentNode.remove();
  };
};