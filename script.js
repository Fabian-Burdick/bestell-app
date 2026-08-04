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

function renderMenuButtons() {
  const buttons = document.querySelectorAll('.menuButton');
  buttons.forEach((button, index) => {
    const basketDish = basket.find((dish) => dish.name === myDishes[index].name);
    if (basketDish) {
      button.innerHTML = `Added ${basketDish.amount}`;
      button.style.color = 'var(--global-h1-color)';
    } else {
      button.innerHTML = 'Add to basket';
      button.style.color = '';
    }
  });
}

function pushDishesToBasket(index) {
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

  renderBasketDishes();
  renderBasketTotal();
  renderMenuButtons();
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

function minusDish(i) {
  if (basket[i].amount > 1) {
    basket[i].amount--;
  } else {
    basket.splice(i, 1);
  }
  renderBasketDishes();
  renderBasketTotal();
  renderMenuButtons();
}

function deleteDishes(i) {
  basket.splice(i, 1);
  renderBasketDishes();
  renderBasketTotal();
  renderMenuButtons();
}
