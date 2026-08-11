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
  const dishTitles = document.querySelectorAll('.menu-text');
  buttons.forEach((button, index) => {
    const basketDish = basket.find((dish) => dish.name === myDishes[index].name);
    const currentTitle = dishTitles[index];
    if (basketDish) {
      button.innerHTML = `Added ${basketDish.amount}`;
      button.style.color = 'var(--global-h1-color)';
      if (currentTitle) {
        currentTitle.classList.add('moved-right');
      }
    } else {
      button.innerHTML = 'Add to basket';
      button.style.color = '';
      if (currentTitle) {
        currentTitle.classList.remove('moved-right');
      }
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
  renderBasketDishes();
  renderBasketTotal();
  renderMenuButtons();
  renderMobileBasketButton();
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
  renderBasketDishes();
  renderBasketTotal();
  renderMenuButtons();
  renderMobileBasketButton();
}

function plusDishes(i) {
  if (basket[i].amount > 0) {
    basket[i].amount++;
  }
  renderBasketDishes();
  renderBasketTotal();
  renderMenuButtons();
  renderMobileBasketButton();
}

function deleteDishes(i) {
  basket.splice(i, 1);
  renderBasketDishes();
  renderBasketTotal();
  renderMenuButtons();
  renderMobileBasketButton();
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
