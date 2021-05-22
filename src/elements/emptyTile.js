import React from 'react';
import {connect} from 'react-redux';
import { Castle } from './buildings/castle.js';
import { Archer } from './units/archer.js';
import { Catapult } from './units/catapult.js';
import { Crossbowman } from './units/crossbowman.js';
import { HeavyCavalry } from './units/heavy-cavalry.js';
import { HeavyIndantry } from './units/heavy-infantry.js';
import { LightCavalry } from './units/light-cavalry.js';
import { Swordsman } from './units/swordsman.js';
import { Warrior } from './units/warrior.js';
const action = require('../actions/actions.js')

const EmptyTile = (props) => {

  const newPosHandler = (event) => {
    props.newPosition({x: props.tileX, y: props.tileY})
  }
  let selectedStyle = {};
  let mes = '';
  let tile;
  if (typeof props.gameStatus.mapArray !== 'undefined') {
    tile = props.gameStatus.mapArray[props.tileX][props.tileY];

    if(!!tile.unit) {
      mes = tile.unit.unitName.slice(0, 3) +'\n' +tile.unit.hitPoints;
      
      if(tile.unit.holder === 0) {
        selectedStyle.color = 'red';
      }
      if(tile.unit.holder === 1) {
        selectedStyle.color = 'blue';
      }

      
    }

    if(tile.update == 'castle') {
      return (
        <td>
          <div style={selectedStyle}>
            <Castle newPosHandler={newPosHandler}
            holder={tile.holder}
            hitPoints={tile.hitPoints} />
          </div>
        </td>
      )
    }

    if(props.gameStatus.selectedTileX === props.tileX && props.gameStatus.selectedTileY === props.tileY) {
      selectedStyle.border= '3px solid red';
    }

    if (!!tile.unit) {
      switch (tile.unit.unitName) {
        case 'warrior':
          return (
            <td>
              <div style={selectedStyle}>
                  <Warrior newPosHandler={newPosHandler} 
                  hitPoints={tile.unit.hitPoints} 
                  holder={tile.unit.holder} />
              </div>
            </td>
          )
        case 'swordsman':
          return (
            <td>
              <div style={selectedStyle}>
                <Swordsman newPosHandler={newPosHandler} 
                hitPoints={tile.unit.hitPoints} 
                holder={tile.unit.holder}/>
              </div>
            </td>
          )
        case 'heavy-infantry':
          return (
            <td>
              <div style={selectedStyle}>
                <HeavyIndantry newPosHandler={newPosHandler}
                hitPoints={tile.unit.hitPoints} 
                holder={tile.unit.holder} />
              </div>
            </td>
          )
        case 'archer':
          return (
            <td>
              <div style={selectedStyle}>
                <Archer newPosHandler={newPosHandler}
                hitPoints={tile.unit.hitPoints} 
                holder={tile.unit.holder} />
              </div>
            </td>
          )
        case 'crossbowman':
          return (
            <td>
              <div style={selectedStyle}>
                <Crossbowman newPosHandler={newPosHandler}
                hitPoints={tile.unit.hitPoints} 
                holder={tile.unit.holder} />
              </div>
            </td>
          )
        case 'light-cavalry':
          return (
            <td>
              <div style={selectedStyle}>
                <LightCavalry newPosHandler={newPosHandler}
                hitPoints={tile.unit.hitPoints} 
                holder={tile.unit.holder} />
              </div>
            </td>
          )  
        case 'catapult':
          return (
            <td>
              <div style={selectedStyle}>
                <Catapult newPosHandler={newPosHandler}
                hitPoints={tile.unit.hitPoints} 
                holder={tile.unit.holder} />
              </div>
            </td>
          )
        case 'heavy-cavalry':
          return (
            <td>
              <div style={selectedStyle}>
                <HeavyCavalry newPosHandler={newPosHandler}
                hitPoints={tile.unit.hitPoints} 
                holder={tile.unit.holder} />
              </div>
            </td>
          ) 
      }
    }
  }
  

  return (
    <td>
      <div className='empty-tile' onClick={newPosHandler} style={selectedStyle}>
        {mes} 
      </div>
    </td>
  )
}

const mapDispatchToProps = {
    newPosition: action.newPosition,
}

const mapStateToProps = (state) => {
  return {
    gameStatus: state,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmptyTile)