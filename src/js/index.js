import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "b9b841dbb44044dd9d0d26c2b377cec6";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/food/menuItems/search?query=All&number=15&apiKey=b9b841dbb44044dd9d0d26c2b377cec6`
    );
    const data = await response.json();
    console.log(data.menuItems);
    data.menuItems.forEach((recipe) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<section class="menu-grid">
            <div class="menu-picture">
                <img src="https://images.spoonacular.com/file/wximages/${recipe.id}-90x90.${recipe.imageType}" alt="" class="picture">
            </div>
        </section>
        `
      );
    });
  } catch (error) {
    alert("Hey, something went wrong!");
  }
};

query();
