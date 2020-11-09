class Player{
  constructor(playerID, nick=""){
    this.nick = nick
    this.id = playerID
    this.handWhiteCards = []
    this.handBlackCurrentCard = null
  }
}

const rick = new Player('150076F','rick')
const gabby = new Player('8A6D80','gabby')
const mel = new Player('D66AA4','mel')