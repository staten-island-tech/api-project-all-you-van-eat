import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.searchform.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const quarry = DOMSelectors.SearchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/menuItems/search?query=${quarry}&number=5&apiKey=b9b841dbb44044dd9d0d26c2b377cec6`
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
      } catch (error) {
        console.log(error);
        alert("Hey something went wrong");
      }
    };
    searchQuery();
  });
};

listen();
