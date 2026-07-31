function init() {
  allDishes();
}

function allDishes() {
  renderDishes('burgerContainer', 'burger');
  renderDishes('pizzaContainer', 'pizza');
  renderDishes('saladContainer', 'salad');
  renderBasketDishes();
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

function renderBasketDishes() {
  const basketContainer = document.getElementById('basketDishes');
  if (!basketContainer) return;
  basketContainer.innerHTML = '';
  if (basket.length === 0) {
    basketContainer.innerHTML = emptyBasketTemplate();
    return;
  }
  for (let i = 0; i < basket.length; i++) {
    basketContainer.innerHTML += basketDishesTemplate(basket[i], i);
  }

  for (let i = 0; i < basket.length; i++) {
    let totalHTML = '';
    basketContainer.innerHTML += basketTotalTemplate(basket[i], i);
  }
  basketContainer.innerHTML = totalHTML;
}
