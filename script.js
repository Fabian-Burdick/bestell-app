function init() {
  allDishes();
}

function allDishes() {
  renderDishes('burgerContainer', 'burger');
  renderDishes('pizzaContainer', 'pizza');
  renderDishes('saladContainer', 'salad');
  renderBasketDishes();
  renderBasketTotal();
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

function pushDishesToBasket(index, buttonElement) {
  const chosenDish = myDishes[index];
  basket.push(chosenDish);

  renderBasketDishes();
  renderBasketTotal();

  let counter = parseInt(buttonElement.getAttribute('data-count')) || 0;
  counter++;

  buttonElement.setAttribute('data-count', counter);
  buttonElement.innerHTML = `Added ${counter}`;
  buttonElement.style.color = 'var(--global-h1-color)';

  if (counter > 1) {
    buttonElement.style.color = 'var(--global-h1-color)';
  }
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
    subtotal += basket[i].price;
  }

  const total = subtotal + 5.9;
  totalContainer.innerHTML = basketTotalTemplate(subtotal, total);
}

window.basket = basket;

window.deleteDishes = function (i) {
  if (window.basket) {
    window.basket.splice(i, 1);
    renderBasketDishes();
    renderBasketTotal();
  }
};

window.plusDish = function (i) {
  basket[i].amount = (basket[i].amount || 1) + 1;

  renderBasketDishes();
  renderBasketTotal();
};

window.minusDish = function (i) {
  if (basket[i].amount > 1) {
    basket[i].amount--;
  } else {
    basket.splice(i, 1);
  }

  renderBasketDishes();
  renderBasketTotal();
};
