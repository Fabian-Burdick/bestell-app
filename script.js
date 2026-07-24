function init() {
  allDishes();
}

function allDishes() {
  renderDishes('burgerContainer', 'burger');
  renderDishes('pizzaContainer', 'pizza');
  renderDishes('saladContainer', 'salad');
}

function renderDishes(containerId, category) {
  const dishMenu = document.getElementById(containerId);
  const dishes = myDishes.filter((dish) => dish.category === category);
  dishMenu.innerHTML = '';
  for (let i = 0; i < dishes.length; i++) {
    dishMenu.innerHTML += dishesTemplate(dishes[i]);
  }
}
