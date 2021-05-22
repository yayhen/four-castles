import React from 'react';
import { hitBar } from '../../logic/hitBar';

export const HeavyIndantry = (props) => {

  return (
    <div style={{background: 'url(./units/heavy-infantry.svg)', height: '45px', width: '45px'}}
        onClick= {props.newPosHandler}>
      <div style={hitBar(props.hitPoints, props.holder)}>

      </div>
    </div>
  )
}