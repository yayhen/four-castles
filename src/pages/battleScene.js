import React from 'react';
import { Link } from 'react-router-dom';
import  GameTable  from '../elements/gameTable';
import { connect } from 'react-redux'
import CastleInfo from '../elements/castleInfo';
import { TurnInfo } from '../elements/turnInfo';
const logic = require('../actions/actions.js')

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
      <TurnInfo whoTurn={props.gameStatus.whoTurn}/>
      <button onClick={endTurnButtonHandler}>End turn</button>
      <div>
        {props.gameStatus.playersGold[props.gameStatus.whoTurn]}
      </div>
      <GameTable dimention={dimention}/>
      <CastleInfo />
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