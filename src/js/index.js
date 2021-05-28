import { DOMSelectors } from "./DOM";

//const key = "da719eac9fa8411596f068053ad6f32a";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/food/menuItems/search?query=All&number=72&apiKey=da719eac9fa8411596f068053ad6f32a`
    );
    const data = await response.json();
    console.log(data.menuItems);
    data.menuItems.forEach((recipe) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="food-card">
        <div class="food-card-inner">
        <div class="food-card-front">
                    <img src="${recipe.image}" alt="" class="picture"/>
                </div>

            <div class="food-card-back">
                <h3 class="food-title">${recipe.title}</h3>
                <div class="chain-container">
                    <p class="restaurant-chain">Restaurant Chain:</p>
                    <p class="restaurant-chain">${recipe.restaurantChain}</p>
                </div>
            </div>
        </div>
        </div>   
        `
      );
    });
  } catch (error) {}
  listen();
};

query();
