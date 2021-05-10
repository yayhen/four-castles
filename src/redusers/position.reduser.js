

const initGameMap = (dimention) => {
  let gameState = {};
  gameState.selectedTileX = -1;
  gameState.selectedTileY = -1;
  gameState.numberOfPlayers= 2;
  gameState.playerNames = [];
  gameState.playerNames[0] = "Player1";
  gameState.playerNames[1] = "Player2";
  gameState.turnIs = 0; // показывает чей ход. Можно использовать в качестве 
  // индекса массива playerNames[ turnIs ]
  gameState.mapArray = []; //задание двумерного массива для хранения
  //gameState.mapArray[0] = []; // состояния игровой карты
  for (let i=0; i<dimention.x; i++) {
    gameState.mapArray[i]=[];
    for (let j=0; j<dimention.y; j++) {
      gameState.mapArray[i][j] = {
        biom: "field",
        update: "none",
      }
    }
  }
  gameState.mapArray[0][dimention.y-1] = {
    biom: "field",
    update: "castle",
    holder: 0,
  }
  gameState.mapArray[dimention.x-1][0] = {
    biom: "field",
    update: "castle",
    holder: 1,
  }
  gameState.mapArray[1][8].unit = {
    holder: 0,
    unitName: "warrior",
    hitPoints: 100,
    attackPower: 50,
    defence: 50,
    actions: 2,
    maxActions: 2,
  }

  gameState.mapArray[1][9].unit = {
    holder: 0,
    unitName: "warrior",
    hitPoints: 100,
    attackPower: 50,
    defence: 50,
    actions: 2,
    maxActions: 2,
  }
  gameState.mapArray[0][8].unit = {
    holder: 0,
    unitName: "archer",
    hitPoints: 100,
    attackPower: 75,
    defence: 25,
    actions: 2,
    maxActions: 2,
  }

  gameState.mapArray[8][1].unit = {
    holder: 1,
    unitName: "warrior",
    hitPoints: 100,
    attackPower: 50,
    defence: 50,
    actions: 2,
    maxActions: 2,
  }

  gameState.mapArray[8][0].unit = {
    holder: 1,
    unitName: "warrior",
    hitPoints: 100,
    attackPower: 50,
    defence: 50,
    actions: 2,
    maxActions: 2,
  }

  gameState.mapArray[9][1].unit = {
    holder: 1,
    unitName: "archer",
    hitPoints: 100,
    attackPower: 75,
    defence: 25,
    actions: 2,
    maxActions: 2,
  }

  
  return gameState
}

const positionReduser = (state = initGameMap({x: 10, y: 10}), action) => {
  switch (action.type) {
    case "NEW_POSITION":
      if(state.selectedTileX == -1) { // если ничего не выделено
        return {...state, selectedTileX: action.pos.x, selectedTileY: action.pos.y};
      }
      if(state.selectedTileX === action.pos.x && state.selectedTileY === action.pos.y) { // если кликнули на выделеннкю клетку
        return {...state, selectedTileX: -1, selectedTileY: -1}
      } 
      if(typeof state.mapArray[state.selectedTileX][state.selectedTileY].unit === 'undefined') { // если нет юнита
        return {...state, selectedTileX: action.pos.x, selectedTileY: action.pos.y};
      } else {
        if(state.mapArray[state.selectedTileX][state.selectedTileY].unit.holder == state.turnIs && state.mapArray[state.selectedTileX][state.selectedTileY].unit.actions > 0) { // если ход игрока - владельца юнита и у юнита есть очки действия
          if(typeof state.mapArray[action.pos.x][action.pos.y].unit !== 'undefined' ) { // если на выбранной ячейке есть атакуемый юнит
            if (Math.abs(state.selectedTileX - action.pos.x) <= 1 && Math.abs(state.selectedTileY - action.pos.y) <= 1 && state.mapArray[state.selectedTileX][state.selectedTileY].unit.unitName ==='warrior') {
              state.mapArray[action.pos.x][action.pos.y].unit.hitPoints -= Math.round(state.mapArray[state.selectedTileX][state.selectedTileY].unit.attackPower * (1-state.mapArray[action.pos.x][action.pos.y].unit.defence/100));
              if(state.mapArray[action.pos.x][action.pos.y].unit.hitPoints <= 0) {
                delete state.mapArray[action.pos.x][action.pos.y].unit;
              }
              state.mapArray[state.selectedTileX][state.selectedTileY].unit.actions -= 1;
              return {...state};
            }
            if (Math.abs(state.selectedTileX - action.pos.x) <= 2 && Math.abs(state.selectedTileY - action.pos.y) <= 2  && state.mapArray[state.selectedTileX][state.selectedTileY].unit.unitName ==='archer') {
              state.mapArray[action.pos.x][action.pos.y].unit.hitPoints -= Math.round(state.mapArray[state.selectedTileX][state.selectedTileY].unit.attackPower * (1-state.mapArray[action.pos.x][action.pos.y].unit.defence/100));
              if(state.mapArray[action.pos.x][action.pos.y].unit.hitPoints <= 0) {
                delete state.mapArray[action.pos.x][action.pos.y].unit;
              }
              state.mapArray[state.selectedTileX][state.selectedTileY].unit.actions -= 1;
              return {...state};
            }
            return {...state}
          }
          if (Math.abs(state.selectedTileX - action.pos.x) <= 1 && Math.abs(state.selectedTileY - action.pos.y) <= 1) {
            state.mapArray[state.selectedTileX][state.selectedTileY].unit.actions -= 1;
            let tmp = Object.assign(state.mapArray[state.selectedTileX][state.selectedTileY].unit);
            delete state.mapArray[state.selectedTileX][state.selectedTileY].unit;
            state.mapArray[action.pos.x][action.pos.y].unit = tmp;
            return {...state, selectedTileX: -1, selectedTileY: -1};
          }
          return state;
        } else return {...state, selectedTileX: -1, selectedTileY: -1};
      }
      
    case "NEW_GAME":
      return initGameMap({x: 10, y: 10});
    case "END_TURN":
      let t = state.turnIs == 0 ? 1 : 0;
      state.mapArray.forEach((item, index) => {
        item.forEach((itm, ind) => {
          if (typeof itm.unit !== 'undefined') {
            itm.unit.actions = itm.unit.maxActions
          }
        })
      });
      return {...state, turnIs: t};
    default:
      return state;
  }
}

module.exports = positionReduser