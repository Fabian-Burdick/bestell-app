const dialog = document.getElementById('myDialog');

function openDialog() {
  dialog.showModal();
  document.getElementById('closeOpenBasket').style.display = 'none';

  basket = [];
  renderMenuButtons();
}

function closeDialog() {
  dialog.close();
}
