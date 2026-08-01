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

function pushDishesToBasket(index) {
  const chosenDish = myDishes[index];
  basket.push(chosenDish);

  renderBasketDishes();
  renderBasketTotal();
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
