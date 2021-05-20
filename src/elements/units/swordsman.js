import React from 'react';

export const Swordsman = (props) => {

  return (
    <div style={{background: 'url(./units/swordsman.svg)', height: '45px', width: '45px'}}
        onClick= {props.newPosHandler}>
      <div style={{background: 'red', position: 'relative', width: '5px', height: '45px', top: '0px', left: '0px'}}>

      </div>
    </div>
  )
}