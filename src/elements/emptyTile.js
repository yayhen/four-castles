import React from 'react';
import {connect} from 'react-redux';
const logic = require('../actions/logic.js')

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
      mes = tile.update;
      if(tile.holder === 0) {
        selectedStyle.color = 'red'
      }
      if(tile.holder === 1) {
        selectedStyle.color = 'blue'
      }
    }

    if(props.gameStatus.selectedTileX === props.tileX && props.gameStatus.selectedTileY === props.tileY) {
      selectedStyle.border= '3px solid red';
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
    newPosition: logic.newPosition,
}

const mapStateToProps = (state) => {
  return {
    gameStatus: state,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmptyTile)