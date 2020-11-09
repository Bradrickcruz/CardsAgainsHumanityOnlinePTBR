class Match {
  constructor(rootPlayer, players, deck, whiteCardsHandQty = 3) {
    this.rootPlayer = [rootPlayer];
    this.players = [...players];
    this.roundBlackCardPlayer = players[0]
    this.deck = deck;
    this.whiteCardsHandQty = whiteCardsHandQty;
    this.round = 0;

    this._initializeMatch()

  }
  _hasPlayersEnough() {
    return this.players.length > 3;
  }
  _rootInPlayersArray() {
    return this.players.includes(this.rootPlayer);
  }
  _distributeWhiteCards(qty){
      for (let player of this.players){
        player.handWhiteCards.push(...this.deck.getWhiteCards(qty))
      }
  }
  _initializeMatch(){
    if(!this._rootInPlayersArray()){
      console.log('O servidor não está entre os jogadores.');
      return
    }
    if (!this._hasPlayersEnough()){
      console.log('Quantidade de jogadores insuficiente.')
      return 
    }
    this._distributeWhiteCards()

  }
}

const firstMatch = new Match(rick, [rick, gabby, mel], firstDeck);
