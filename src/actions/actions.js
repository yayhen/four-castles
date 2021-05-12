const newPosition = (pos) => {
  return {
    type: "NEW_POSITION",
    pos
  }
}

const newGame = (dimention) => {
  return {
    type: "NEW_GAME",
    dimention,
  }
}

const endingTurn = () => {
  return {
    type: "END_TURN"
  }
}

module.exports = {newPosition, newGame, endingTurn}
