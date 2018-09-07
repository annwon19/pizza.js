function playGame() {
//ask player one for a number between 1 and 4
var p1=prompt("Player 1. num between 1 and 4");
//ask player two for a number between 1 and 4
var p2=prompt("Player 2. num between 1 and 4");
//scold the player if they entered a number outside of the range then end the game (checks if true)
if ((p1<1 || p1>4) || (p2<1 || p2>4)); {
window.alert("one of you cheated. Game over.");
return;
}
//if player one AND playe two numbers are the same, say everyone win
if (p1===p2){
window.alert("you both win");
}
//ELSE tell both players what they chose, and why they are losers
else {
window.alert("you both lose. player one chose "+p1+" and player two chose "+p2);
}
}