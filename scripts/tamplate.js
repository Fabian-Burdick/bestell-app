function dishesTemplate(dishes) {
  return `<div class="menu-card">
                        <div>
                            <img src="${dishes.image}">
                        </div>
                        <div class="menu-info">
                            <div class="menu-text">
                                <h6>${dishes.name}</h6>
                                <p>${dishes.description}</p>
                            </div>
                            <div class="menu-price">
                                <h6>${dishes.price.toFixed(2).replace('.', ',')} €</h6>
                                <button onclick="pushDishesToBasket(${JSON.stringify(myDishes)})">
                                    Add to basket 
                                </button>
                            </div>
                        </div>
                    </div>`;
}

function BasketDishesTemplate(dishes) {
  return `<div id="basketDishes" class="basket">
      <div class="basket-content">
        <h4>Your Basket</h4>
        <div class="basket-menucard">
          <div>
            <p>${dishes.name}</p>
          </div>
          <div class="basket-menucard-container">
            <div class="basket-menucard-text">
              <img src="./assets/icons/bin.webp" alt="bin" />
              <p>1+</p>
            </div>
            <p>${dishes.price.toFixed(2).replace('.', ',')} €</p>
          </div>
        </div>
        <div class="total-content">
          <div class="total-price">
            <p>Subtotal</p>
            <p>Price</p>
          </div>
          <div class="total-price">
            <p>Dilivery fee</p>
            <p>Price</p>
          </div>
          <div class="underline"></div>
          <div class="total">
            <p>Total</p>
            <p>Price</p>
          </div>
          <div>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>`;
}

function emptyBasketTemplate() {
  return `<div class="basket">
            <div class="basket-content">
              <h4>Your Basket</h4>
              <p>
                Nothing here yet.<br />
                Go ahead and choose something delicious!
              </p>
              <img src="./assets/icons/basket.webp" alt="Basket" />
            </div>
        </div>`;
}
