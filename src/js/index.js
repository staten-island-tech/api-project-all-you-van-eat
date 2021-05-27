import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const imagename1 = document.querySelector("#gameimg-1-text");
const imagename2 = document.querySelector("#gameimg-2-text");

const score = 0;
let questionCounter = 0;
const questioncorrect = true;
// const imageim1 = (document.getElementByClass("gameimg-1").style.backgroundImage = "url(images/img.jpg)");

//const key = "da719eac9fa8411596f068053ad6f32a";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?apiKey=da719eac9fa8411596f068053ad6f32a&number=5&minCarbs=10`
    );
    const data = await response.json();
    console.log(data.menuItems);
  } catch (error) {}
};

/* ImageChange = () => {
  document.getElementByClass("gameimg-1").style.backgroundImage =
    "url(https://api.spoonacular.com/recipes/findByNutrients?apiKey=da719eac9fa8411596f068053ad6f32a&number=1&minCarbs=10&offset=3)";
};

Endgame = () => {
  if (questioncorrect != true) {
    const quitorna = window.confirm(
      "Congrats, your score is: " + score + "\n\nWould you like to restart?"
    );
    if (quitorna == true) {
      window.location.reload();
    } else {
      window.location.assign("index.html");
    }
  }
};

gamestart(); */
