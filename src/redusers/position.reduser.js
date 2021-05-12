import MapCreator from '../logic/mapCreator.js';
import {createUnit} from '../logic/units';
import {nothingSelected, clickOnSelectedTile, lackOfUnitInSelectedTile, turnOfPlayer, unitHaveActionPoints, inClickedTileExistUnit, attackedUnitInRange, unitCanTurnInSelectTile} from '../logic/clickCheck'
import {selectTile, unselectTile, attackOnUnit, moveUnit, endTurn} from '../logic/gameActions.js'

const initGameMap = (dimention) => {
  let gameMap = new MapCreator(dimention, ['Player1', 'Player2']);
  gameMap.createBattleGround();
  gameMap.addCastle({x: 0, y: 9}, 0);
  gameMap.addCastle({x: 9, y: 0}, 1);
  gameMap.addUnit({x: 1, y: 9}, createUnit('warrior', 0));
  gameMap.addUnit({x: 9, y: 1}, createUnit('archer', 1));

  let gameState = {
    selectedTileX: -1,
    selectedTileY: -1,
    numberOfPlayers: gameMap.numberOfPlayers,
    playerNames: gameMap.players,
    whoTurn: 0,
    mapArray: gameMap.battleGround,
  };

  return gameState
}

export const actionReduser = (state = initGameMap({x: 10, y: 10}), action) => {
  switch (action.type) {
    case "NEW_POSITION":
      if(nothingSelected(state)) { // если ничего не выделено
        return selectTile(state, action);
      }
      if(clickOnSelectedTile(state, action)) { // если кликнули на выделеннкю клетку
        return unselectTile(state);
      }
      if(lackOfUnitInSelectedTile(state)) { // если нет юнита
        return selectTile(state, action);
      } else {
        if(turnOfPlayer(state) && unitHaveActionPoints(state)) { // если ход игрока - владельца юнита и у юнита есть очки действия
          if(inClickedTileExistUnit(state, action)) { // если на выбранной ячейке есть атакуемый юнит
            if (attackedUnitInRange(state, action)) {
              return attackOnUnit(state, action);
            }
            return {...state}
          }
          if (unitCanTurnInSelectTile(state, action)) {
            return moveUnit(state, action);
          }
          return state;
        } else return unselectTile(state);
      }
      
    case "NEW_GAME":
      return initGameMap({x: 10, y: 10});
    case "END_TURN":
      return endTurn(state);
    default:
      return state;
  }
}
