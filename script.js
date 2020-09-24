// Menu

const calculatorBtn = document.querySelector("#calculatorBtn");
const priceIsRightBtn = document.querySelector("#priceIsRightBtn");
const calculatorArticle = document.querySelector("#calculator");

calculatorBtn.addEventListener("click", () => {
  calculatorArticle.classList.toggle("hidden");
});
priceIsRightBtn.addEventListener("click", priceIsRight);

//   Calculator

let form = document.querySelector("#form");
let submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  let firstValue = document.querySelector("#num1");
  let operator = document.querySelector("#operator");
  let secondValue = document.querySelector("#num2");
  let resultDisplay = document.querySelector("#resultDisplay");
  let result;
  switch (operator.value) {
    case "plus":
      result = +firstValue.value + +secondValue.value;
      break;
    case "minus":
      result = +firstValue.value - +secondValue.value;
      break;
    case "division":
      result = +firstValue.value / +secondValue.value;
      break;
    case "multiplication":
      result = +firstValue.value * +secondValue.value;
      break;
    case "modulo":
      result = +firstValue.value % +secondValue.value;
      break;
    default:
      result = "fail";
    //   throw new Error("Invalid operator");
  }

  resultDisplay.innerHTML = result;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//   Bonus Challenge

function priceIsRight() {
  const playerName = prompt("Spartiate quel est votre nom ?");
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let countNumber = 0;

  function checkPrice(playerName, randomNumber) {
    let playerNumber = prompt("Spartiate quel est votre prix ?!");
    countNumber++;
    switch (true) {
      case +playerNumber > randomNumber:
        console.log("Le prix est inférieur !");
        checkPrice(playerName, randomNumber);
        break;
      case +playerNumber < randomNumber:
        console.log("Le prix est supérieur !");
        checkPrice(playerName, randomNumber);
        break;
      case +playerNumber === randomNumber:
        console.log(
          `Juste prix !!! ${playerName} gagne en ${countNumber} coups !`
        );
        break;
      default:
        throw new Error("Mauvaise entrée.");
        checkPrice(playerName, randomNumber);
    }
  }
  //   console.log(randomNumber);
  checkPrice(playerName, randomNumber);
}
