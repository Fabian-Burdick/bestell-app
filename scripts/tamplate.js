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
                                <button onclick="menuButtons()">
                                    <p id="menuButton">Add to basket </p>
                                </button>
                            </div>
                        </div>
                    </div>`;
}
