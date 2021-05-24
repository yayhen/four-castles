import React from 'react'

export const TurnInfo = (props) => {
  let whoTurnStyle = ['turn-info__player-1', 'turn-info__player-2'];
  whoTurnStyle[props.whoTurn] += '_active'
  return (
    <div className='turn-info'>
      <div className={whoTurnStyle[0]}>

      </div>
      <div className={whoTurnStyle[1]}>
        
      </div>
    </div>
  )
}