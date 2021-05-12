const nothingSelected = (state) => {
  if(state.selectedTileX == -1) {
    return true;
  }
  return false;
}

const clickOnSelectedTile = (state, action) => {
  if(state.selectedTileX === action.pos.x && state.selectedTileY === action.pos.y) {
    return true;
  }
  return false;
}

const lackOfUnitInSelectedTile = (state) => {
  if(typeof state.mapArray[state.selectedTileX][state.selectedTileY].unit === 'undefined') {
    return true;
  }
  return false;
}

const turnOfPlayer = (state) => {
  if (state.mapArray[state.selectedTileX][state.selectedTileY].unit.holder == state.whoTurn) {
    return true;
  }
  return false;
}

const unitHaveActionPoints = (state) => {
  if (state.mapArray[state.selectedTileX][state.selectedTileY].unit.actions > 0) {
    return true;
  }
  return false;
}

const inClickedTileExistUnit = (state, action) => {
  if(typeof state.mapArray[action.pos.x][action.pos.y].unit !== 'undefined') {
    return true;
  }
  return false;
}

const attackedUnitInRange = (state, action) => {
  if (Math.abs(state.selectedTileX - action.pos.x) <= state.mapArray[state.selectedTileX][state.selectedTileY].unit.attackRange
      && Math.abs(state.selectedTileY - action.pos.y) <= state.mapArray[state.selectedTileX][state.selectedTileY].unit.attackRange) {
    return true;
  }
  return false;
}

const unitCanTurnInSelectTile = (state, action) => {
  if(Math.abs(state.selectedTileX - action.pos.x) <= 1 
      && Math.abs(state.selectedTileY - action.pos.y) <= 1) {
    return true;
  }
  return false;
}

export {nothingSelected, clickOnSelectedTile, lackOfUnitInSelectedTile, turnOfPlayer, unitHaveActionPoints, inClickedTileExistUnit, attackedUnitInRange, unitCanTurnInSelectTile}