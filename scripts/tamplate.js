function dishesTemplate(dishes, index) {
  return `
    <div class="menu-card"> 
      <div> 
        <img src="${dishes.image}" alt="${dishes.name}"> 
      </div> 
      <div class="menu-info"> 
        <div class="menu-text"> 
          <h6>${dishes.name}</h6> 
          <p>${dishes.description}</p> 
        </div> 
        <div class="menu-price"> 
          <h6>${dishes.price.toFixed(2).replace('.', ',')} €</h6> 
          <button onclick="pushDishesToBasket(${index})"> 
            Add to basket 
          </button> 
        </div> 
      </div> 
    </div>`;
}

function basketDishesTemplate(dish, index) {
  return `
        <div class="basket-menucard">
            <p>1 x ${dish.name}</p>
          <div class="basket-menucard-container">
            <div class="basket-menucard-text">
              <img src="./assets/icons/bin.webp" alt="bin" />
              <p>1+</p>
            </div>
            <p>${dish.price.toFixed(2).replace('.', ',')} €</p>
          </div>
        </div>`;
}

function basketTotalTemplate(subtotal, total) {
  return `
          <div class="total-content">
            <div class="price-list">
               <div class="total-price">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2).replace('.', ',')} €</p>
              </div>
              <div class="total-price">
                <p>Delivery fee</p>
                <p>5,90 €</p>
              </div>
              <div class="underline">
              </div>
              <div class="total">
                <p>Total</p>
                <p>${total.toFixed(2).replace('.', ',')} €</p>
              </div>
            </div>
              <div>
                <button>Buy now (${total.toFixed(2).replace('.', ',')}€)</button>
              </div>
          </div>`;
}

function emptyBasketTemplate() {
  return `<div class="empty-basket-content">
            <p>
              Nothing here yet.<br />
              Go ahead and choose something delicious!
            </p>
              <img src="./assets/icons/basket.webp" alt="Basket" />
          </div>`;
}
