const dialog = document.getElementById('myDialog');

function openDialog() {
  dialog.showModal();
  dialog.classList.add('opened');
}

function closeDialog() {
  dialog.close();
  dialog.classList.remove('opened');
}
