function init() {
  allDishes();
}

function allDishes() {
  renderDishes('burgerContainer', 'burger');
  renderDishes('pizzaContainer', 'pizza');
  renderDishes('saladContainer', 'salad');
  renderBasketDishes();
  renderEmptyBasket();
}

function renderDishes(containerId, category) {
  const dishMenu = document.getElementById(containerId);
  const dishes = myDishes.filter((dish) => dish.category === category);
  dishMenu.innerHTML = '';
  for (let i = 0; i < dishes.length; i++) {
    dishMenu.innerHTML += dishesTemplate(dishes[i]);
  }
}

function renderBasketDishes() {
  let basketDishesRef = document.getElementById('basketDishes');
  // basketDishesRef.innerHTML = '';

  for (let i = 0; i < basketDishes.length; i++) {
    basketDishesRef.innerHTML += BasketDishesTemplate(dishes[i]);
  }
}

function pushDishesToBasket(containerId, category) {
  const basketsDishes = myDishes.splice(containerId);
  myDishes.push(basketsDishes[0]);
}

function renderEmptyBasket() {
  const basketContainer = document.getElementById('basketId');

  if (basketContainer) {
    basketContainer.innerHTML = emptyBasketTemplate();
  }
}
