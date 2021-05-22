import React from 'react';
import { hitBar } from '../../logic/hitBar';

export const Crossbowman = (props) => {

  return (
    <div style={{background: 'url(./units/crossbowman.svg)', height: '45px', width: '45px'}}
        onClick= {props.newPosHandler}>
      <div style={hitBar(props.hitPoints, props.holder)}>

      </div>
    </div>
  )
}