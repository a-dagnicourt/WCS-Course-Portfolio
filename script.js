// Menu

const calculatorBtn = document.querySelector("#calculatorBtn");
const priceIsRightBtn = document.querySelector("#priceIsRightBtn");
const calculatorArticle = document.querySelector("#calculator");
const priceArticle = document.querySelector("#priceRight");

calculatorBtn.addEventListener("click", () => {
  calculatorArticle.classList.toggle("hidden");
});
priceIsRightBtn.addEventListener("click", () => {
  priceArticle.classList.toggle("hidden");
});

//   Calculator

let calcForm = document.querySelector("#calcForm");
let calcSubmit = document.querySelector("#calcSubmit");

calcSubmit.addEventListener("click", () => {
  const firstValue = document.querySelector("#num1");
  const operator = document.querySelector("#operator");
  const secondValue = document.querySelector("#num2");
  const resultDisplay = document.querySelector("#resultDisplay");
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

calcForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

//   Bonus Challenge

let priceForm = document.querySelector("#priceForm");
let priceSubmit = document.querySelector("#priceSubmit");

const randomNumber = Math.floor(Math.random() * 100) + 1;
let countNumber = 0;

priceSubmit.addEventListener("click", () => {
  const nameEntry = document.querySelector("#nameEntry");
  const priceEntry = document.querySelector("#priceEntry");
  const priceDisplay = document.querySelector("#priceDisplay");
  countNumber++;
  switch (true) {
    case +priceEntry.value > +randomNumber:
      priceDisplay.innerHTML = "Le prix est inférieur !";

      break;
    case +priceEntry.value < +randomNumber:
      priceDisplay.innerHTML = "Le prix est supérieur !";

      break;
    case +priceEntry.value === +randomNumber:
      priceDisplay.innerHTML = `Juste prix ! ${nameEntry.value} gagne en ${countNumber} coups !`;
      break;
    default:
      priceDisplay.innerHTML = "Mauvaise entrée, recommencez.";
  }
});

priceForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
