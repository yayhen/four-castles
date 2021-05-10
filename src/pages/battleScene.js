import React from 'react';
import { Link } from 'react-router-dom';
import  GameTable  from '../elements/gameTable';
import { connect } from 'react-redux'
const logic = require('../actions/logic')

const BattleScene = (props) => {
  const dimention = {
    x: 10,
    y: 10,
  }

  const endTurnButtonHandler = (event) => {
    props.endingTurn();
  }


  return(
    <div>
      <div>
        {props.gameStatus.turnIs}
      </div>
      <button onClick={endTurnButtonHandler}>End turn</button>
      <GameTable dimention={dimention}/>
      <Link to='/'>
        Back
      </Link>
    </div>
    
  )
}

const mapDispatchToProps = {
  endingTurn: logic.endingTurn
}

const mapStateToProps = (state) => {
  return {
    gameStatus: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleScene)