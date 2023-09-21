/*


* CHALLENGE 3


*/

const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

const scoreDolphins =
  (dolphinsScores[0] + dolphinsScores[1] + dolphinsScores[2]) / 3;
const scoreKoalas = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;

let winner;
if (scoreDolphins > scoreKoalas) {
  winner = "Dolphins";
} else if (scoreKoalas > scoreDolphins) {
  winner = "Koalas";
} else {
  winner = "Both";
}

if (winner === "Dolphins") {
  console.log("Dolphins win the trophy");
} else if (winner === "Koalas") {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win a trophy");
}
