//import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

//GET "https://api.spoonacular.com/food/menuItems/search=burger&number=2&apiKey=" + key

const query = async function () {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/food/menuItems/search?query=All&number=15&apiKey=b9b841dbb44044dd9d0d26c2b377cec6`
    );
    const data = await response.json();
    console.log(data.menuItems);
    data.menuItems.forEach((recipe) => {});
  } catch (error) {
    console.log(error);
    alert("Hey, something went wrong!");
  }
};

query();
