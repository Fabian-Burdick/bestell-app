function init() {
  allDishes();
}

function allDishes() {
  renderDishes('burgerContainer', 'burger');
  renderDishes('pizzaContainer', 'pizza');
  renderDishes('saladContainer', 'salad');
  renderBasketDishes();
}

function renderAll() {
  renderBasketDishes();
  renderBasketTotal();
  renderMenuButtons();
  renderMobileBasketButton();
}

function renderDishes(containerId, category) {
  const dishMenu = document.getElementById(containerId);
  const dishes = myDishes.filter((dish) => dish.category === category);

  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];
    const originalIndex = myDishes.indexOf(dish);
    dishMenu.innerHTML += dishesTemplate(dish, originalIndex);
  }
}

function renderMenuButtons() {
  document.querySelectorAll('.menuButton').forEach((button, index) => {
    const basketDish = basket.find((dish) => dish.name === myDishes[index].name);
    const currentTitle = document.querySelectorAll('.menu-text')[index];

    button.innerHTML = basketDish ? `Added ${basketDish.amount}` : 'Add to basket';
    button.style.color = basketDish ? 'var(--global-h1-color)' : '';

    if (currentTitle) {
      currentTitle.classList.toggle('moved-right', !!basketDish);
    }
  });
}

function pushDishesToBasket(index) {
  if (window.innerWidth > 768) {
    document.getElementById('closeOpenBasket').style.display = 'flex';
  }
  const chosenDish = myDishes[index];
  const existingDish = basket.find((dish) => dish.name === chosenDish.name);
  if (existingDish) {
    existingDish.amount++;
  } else {
    basket.push({
      ...chosenDish,
      amount: 1,
    });
  }
  renderAll();
}

function renderBasketDishes() {
  const basketContainer = document.getElementById('basketDishes');
  if (!basketContainer) return;
  basketContainer.innerHTML = '';
  if (basket.length === 0) {
    basketContainer.innerHTML = emptyBasketTemplate();
    return;
  }
  let dishContent = '';
  for (let i = 0; i < basket.length; i++) {
    dishContent += basketDishesTemplate(basket[i], i);
  }
  basketContainer.innerHTML = dishContent;
}

function renderBasketTotal() {
  const totalContainer = document.getElementById('basketTotal');
  if (!totalContainer) return;
  if (basket.length === 0) {
    totalContainer.innerHTML = '';
    return;
  }
  let subtotal = 0;
  for (let i = 0; i < basket.length; i++) {
    subtotal += basket[i].price * basket[i].amount;
  }
  const delivery = 5.9;
  const total = subtotal + delivery;
  totalContainer.innerHTML = basketTotalTemplate(subtotal, total);
}

function minusDishes(i) {
  if (basket[i].amount > 1) {
    basket[i].amount--;
  } else {
    basket.splice(i, 1);
  }
  renderAll();
}

function plusDishes(i) {
  if (basket[i].amount > 0) {
    basket[i].amount++;
  }
  renderAll();
}

function deleteDishes(i) {
  basket.splice(i, 1);
  renderAll();
}

document.addEventListener('DOMContentLoaded', function () {
  const basket = document.querySelector('.basket');
  if (!basket) return;
  function updateMobileBasket() {
    const isEmpty = basket.querySelector('.empty-basket-content') !== null;
    if (isEmpty) {
      basket.classList.add('is-empty');
    } else {
      basket.classList.remove('is-empty');
    }
  }
  updateMobileBasket();
  const observer = new MutationObserver(updateMobileBasket);
  observer.observe(basket, { childList: true, subtree: true });
});

function openMobileBasket() {
  const basket = (document.getElementById('closeOpenBasket').style.display = 'flex');
  document.documentElement.classList.add('modal-open');
  document.body.classList.add('modal-open');
}

function closeMobileBasket() {
  const basket = (document.getElementById('closeOpenBasket').style.display = 'none');
  document.documentElement.classList.remove('modal-open');
  document.body.classList.remove('modal-open');
}

function renderMobileBasketButton() {
  const mobileButton = document.getElementById('mobileBasketButton');
  if (!mobileButton) return;
  let totalCount = 0;
  for (let i = 0; i < basket.length; i++) {
    totalCount += basket[i].amount;
  }
  if (totalCount > 0) {
    mobileButton.innerHTML = mobileBasketButtonActiveTemplate(totalCount);
  } else {
    mobileButton.innerHTML = mobileBasketButtonEmptyTemplate();
  }
}

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
