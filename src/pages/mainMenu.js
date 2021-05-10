import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { newGame } from '../actions/logic';

const MainMenu = (props) => {

  const createNewGameHandler = (event) => {
    props.newGame({x: 10, y: 10});
  }

  return (
      <div>
        <button onClick={createNewGameHandler}>Create new game</button>
        <Link to='/singleGame'>
          Single game
        </Link>
      </div>
  )
}

const mapDispatchToProps = {
  newGame: newGame
}

export default connect(null, mapDispatchToProps)(MainMenu)