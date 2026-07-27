function init() {
  allDishes();
}

function allDishes() {
  renderDishes('burgerContainer', 'burger');
  renderDishes('pizzaContainer', 'pizza');
  renderDishes('saladContainer', 'salad');
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

// function pushDishesToBasket(containerId, category) {
//   const dishMenu = document.getElementById(containerId);
//   const dishes = myDishes.find((dish) => dish.category === category);
//   dishMenu.innerHTML = '';
//   for (let i = 0; i < dishes.length; i++) {
//     dishMenu.innerHTML += dishesTemplate(dishes[i]);
//   }
// }

function renderEmptyBasket() {
  const basketContainer = document.getElementById('basketId');

  if (basketContainer) {
    basketContainer.innerHTML = emptyBasketTemplate();
  }
}
