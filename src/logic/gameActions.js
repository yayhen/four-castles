import { clickOnSelectedTile } from "./clickCheck";
import { createUnit } from "./units";

const selectTile = (state, action) => {
  return {...state, selectedTileX: action.pos.x, selectedTileY: action.pos.y};
}

const unselectTile = (state) => {
  return {...state, selectedTileX: -1, selectedTileY: -1};
}

const attackOnUnit = (state, action) => {
  state.mapArray[action.pos.x][action.pos.y].unit.hitPoints -= Math.round(state.mapArray[state.selectedTileX][state.selectedTileY].unit.attackPower * (1-state.mapArray[action.pos.x][action.pos.y].unit.defence/100));
  if(state.mapArray[action.pos.x][action.pos.y].unit.hitPoints <= 0) {
    delete state.mapArray[action.pos.x][action.pos.y].unit;
  }
  state.mapArray[state.selectedTileX][state.selectedTileY].unit.actions = 0;
  return {...state};
}

const moveUnit = (state, action) => {
  state.mapArray[state.selectedTileX][state.selectedTileY].unit.actions -= 1;
  let tmp = Object.assign(state.mapArray[state.selectedTileX][state.selectedTileY].unit);
  delete state.mapArray[state.selectedTileX][state.selectedTileY].unit;
  state.mapArray[action.pos.x][action.pos.y].unit = tmp;
  return {...state, selectedTileX: -1, selectedTileY: -1};
}

const endTurn = (state) => {
  let t = state.whoTurn == 0 ? 1 : 0;
  state.playersGold[state.whoTurn] += 10;
  state.mapArray.forEach((item, index) => {
    item.forEach((itm, ind) => {
      if (typeof itm.unit !== 'undefined') {
        itm.unit.actions = itm.unit.maxActions
      }
    })
  });
  return {...state, whoTurn: t};
}

const buyUnit = (state, unit) => {
  if (createUnit(unit.unitName, unit.holder).cost <= state.playersGold[unit.holder]) {
    const newUnit = createUnit(unit.unitName, unit.holder);
    state.playersGold[unit.holder] -= newUnit.cost;
    state.mapArray[state.castlePositions[state.whoTurn].x][state.castlePositions[state.whoTurn].y].unit = newUnit;
  }
  return {...state};
}

export {selectTile, unselectTile, attackOnUnit, moveUnit, endTurn, buyUnit}