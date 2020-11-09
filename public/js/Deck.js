class Deck {
  constructor(firstPlayer, whiteCardsHandQty = 3) {
    this.deck = {
      gameBlackCards: blackCards,
      gameWhiteCards: whiteCards,
    };
    this.players = [firstPlayer];
    this.whiteCardsHandQty = whiteCardsHandQty;
    this.round = 0;
    this.discards = {
      blackCards: [],
      whiteCards: [],
    };
  }

  getBlackCard() {
    return this.deck.gameBlackCards.pop();
  }
  getWhiteCards() {
    return shuffle(this.deck.gameWhiteCards).pop()
  }
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}