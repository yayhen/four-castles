import React from 'react';

export const Warrior = (props) => {

  return (
    <div style={{background: 'url(./units/warrior.svg)', height: '45px', width: '45px'}}
        onClick= {props.newPosHandler}>
      <div style={{background: 'red', position: 'relative', width: '5px', height: '30px', top: '15px', left: '0px', border: '1px solid red'}}>

      </div>
    </div>
  )
}