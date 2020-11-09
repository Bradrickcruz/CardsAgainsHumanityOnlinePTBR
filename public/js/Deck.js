class Deck {
  constructor(selectedBlackCards,selectedWhiteCards) {
    this.deck = {
      gameBlackCards: selectedBlackCards,
      gameWhiteCards: selectedWhiteCards,
    };

    this.discards = {
      blackCards: [],
      whiteCards: [],
    };
  }

  getBlackCard() {
    let card = this.deck.gameBlackCards.pop();
    this.discards.blackCards.push(card);
    if (this.deck.gameWhiteCards.length < 5) {
      this.deck.gameBlackCards.push(...this.discards.blackCards);
    }
    return card;
  }
  getWhiteCards(qty = 1) {
    let cards = [];
    for (let i = 0; i < qty; i++) {
      let card = shuffle(this.deck.gameWhiteCards).pop();
      this.discards.whiteCards.push(card);
      cards.push(card);
    }
    if (this.deck.gameWhiteCards.length < 10) {
      this.deck.gameWhiteCards.push(...this.discards.whiteCards);
    }
    return cards;
  }
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

let firstDeck = new Deck(blackCards,whiteCards);
