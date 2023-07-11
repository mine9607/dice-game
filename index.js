var randNum1 = Math.floor(Math.random() * 6) + 1;
var randDiceImage1 = "./images/dice" + randNum1 + ".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", randDiceImage1);

var randNum2 = Math.floor(Math.random() * 6) + 1;
var randDiceImage2 = "./images/dice" + randNum2 + ".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", randDiceImage2);

if (randNum1 == randNum2) {
  document.querySelector("h1").textContent = "It's a Draw!";
} else if (randNum1 > randNum2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
