var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var checkForMath = function () {

if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again."); }
};

var flipCard = function (cardId) {
console.log("User flipped " + cards[cardId]);

cardsInPlay.push(cards[cardId]);

if (cardsInPlay.length === 2) {
checkForMatch();}
};
flipCard (0);
