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

  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];
    const originalIndex = myDishes.indexOf(dish);
    dishMenu.innerHTML += dishesTemplate(dish, originalIndex);
  }
}

function pushDishesToBasket(index) {
  const chosenDish = myDishes[index];
  basket.push(chosenDish);
  renderBasketDishes();
}

function renderEmptyBasket() {
  const basketContainer = document.getElementById('basketId');
  if (basketContainer) {
    basketContainer.innerHTML = emptyBasketTemplate();
  }
}

function renderBasketDishes() {
  const basketContainer = document.getElementById('basketDishes');
  if (!basketContainer) return;
  basketContainer.innerHTML = '';
  if (basket.length === 0) {
    return;
  }
  for (let i = 0; i < basket.length; i++) {
    basketContainer.innerHTML += basketDishesTemplate(basket[i], i);
  }

  renderBasketTotal();
}
