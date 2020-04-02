const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {alert("Sorry, try again.")}
	
}

function flipCard(cardId) {
	/*let cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);

	let cardTwo = cards[1];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);*/

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

}

flipCard(0);
flipCard(2);