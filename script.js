  let firstValue = +prompt("Première valeur ?");
  let operator = prompt("Un opérateur ?");
  let secondValue = +prompt("Seconde valeur ?");

  //   if (operator === "+") {
  //     console.log(firstValue + secondValue);
  //   } else {
  //     console.log(firstValue - secondValue);
  //   }

  switch (operator) {
    case "+":
      console.log(firstValue + secondValue);
      break;
    case "-":
      console.log(firstValue - secondValue);
      break;
    case "/":
      console.log(firstValue / secondValue);
      break;
    case "*":
      console.log(firstValue * secondValue);
      break;
    case "%":
      console.log(firstValue % secondValue);
      break;
    default:
      throw new Error("Invalid operator");
  }

  Bonus Challenge
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
console.log(randomNumber);
checkPrice(playerName, randomNumber);
