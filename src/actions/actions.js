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

const addUnit = (unit) => {
  return {
    type: "ADD_UNIT",
    unit
  }
}

module.exports = {newPosition, newGame, endingTurn, addUnit}
