import React from 'react';
import {hitBar} from '../../logic/hitBar'

export const Warrior = (props) => {

  return (
    <div style={{background: 'url(./units/warrior.svg)', height: '45px', width: '45px'}}
        onClick= {props.newPosHandler}>
      <div style={hitBar(props.hitPoints, props.holder)}>

      </div>
    </div>
  )
}