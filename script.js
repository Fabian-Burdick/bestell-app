const burgerMenu = document.getElementById("burger-content");
burgerMenu.innerHTML = `<div class="menu-card">
                <div>
                    <img src="./assets/img/veggie-burger.jpg" alt="veggie-burger">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6> Veggie mushroom black burger</h6>
                        <p>Mixed green salad, Tomatoes, Edamame, Mushrooms</p>
                    </div>
                    <div class="menu-price">
                        <h6>16,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div>
                    <img src="./assets/img/meat-burger.jpg" alt="meat-burger">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>All meat burger</h6>
                        <p>Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ souse</p>
                    </div>
                    <div class="menu-price">
                        <h6>15,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div>
                    <img src="./assets/img/beef-burger.jpg" alt="beef-burger">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>Beef red burger</h6>
                        <p>Beef, Cheese, Tomatoes, Lettuce, Onion</p>
                    </div>
                    <div class="menu-price">
                        <h6>14,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div>
                    <img src="./assets/img/chicken-burger.jpg" alt="chicken-burger">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>Blg chicken burger</h6>
                        <p>Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell, Pepper</p>
                    </div>
                    <div class="menu-price">
                        <h6>15,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>`;

const pizzaMenu = document.getElementById("pizza-content");
pizzaMenu.innerHTML = `<div class="menu-card">
                <div>
                    <img src="./assets/img/pizza-margherita.jpg" alt="pizza-margherita">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>Pizza Margherita</h6>
                        <p>Tomato Sauce, Mozzarella</p>
                    </div>
                    <div class="menu-price">
                        <h6>11,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div>
                    <img src="./assets/img/pizza-chorizo.jpg" alt="pizza-chorizo">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>Pizza Chorizo</h6>
                        <p>Tomato slices, Mozzarella, Chorizo</p>
                    </div>
                    <div class="menu-price">
                        <h6>13,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div>
                    <img src="./assets/img/pizza-funghi.jpg" alt="pizza-funghi">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>Funghi</h6>
                        <p>Red onion, Olives, Button Mushrooms, Mozzarella</p>
                    </div>
                    <div class="menu-price">
                        <h6>12,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div>
                    <img src="./assets/img/pizza-chicken.jpg" alt="pizza-chicken">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>Quattro Formaggie with Chicken</h6>
                        <p>Tomato Sauce, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano</p>
                    </div>
                    <div class="menu-price">
                        <h6>15,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>`;

const saladMenu = document.getElementById("salad-content");
saladMenu.innerHTML = `            <div class="menu-card">
                <div>
                    <img src="./assets/img/beef-salad.jpg" alt="beef-salad">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>Warm beef arugula salad </h6>
                        <p>Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar
                            dressing</p>
                    </div>
                    <div class="menu-price">
                        <h6>16,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div>
                    <img src="./assets/img/green-salad.jpg" alt="green-salad">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>Mini green Salad</h6>
                        <p>Green salad, Cucumber, Carrots, Parsley, Radishes </p>
                    </div>
                    <div class="menu-price">
                        <h6>7,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div>
                    <img src="./assets/img/seafood-salad.jpg" alt="seafood-salad">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>Green Salad with sea food</h6>
                        <p>Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon
                            dressing with dill</p>
                    </div>
                    <div class="menu-price">
                        <h6>16,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div>
                    <img src="./assets/img/vegan-salad.jpg" alt="vegan-salad">
                </div>
                <div class="menu-info">
                    <div class="menu-text">
                        <h6>Vegan green salad with tofu</h6>
                        <p>Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu,
                            Peanuts </p>
                    </div>
                    <div class="menu-price">
                        <h6>16,90€</h6>
                        <button>
                            <p>Add to basket </p>
                        </button>
                    </div>
                </div>
            </div>`;