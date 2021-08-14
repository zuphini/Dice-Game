// Grabbing a random number between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Setting the image to match random die number for each player
document.querySelector(".img1").setAttribute("src", "images\\dice" + String(randomNumber1) + ".png");
document.querySelector(".img2").setAttribute("src", "images\\dice" + String(randomNumber2) + ".png");

//Changing the text to show who won
if (randomNumber1 > randomNumber2){
  document.getElementById("title").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
  document.getElementById("title").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.getElementById("title").innerHTML = "Draw!";
}
