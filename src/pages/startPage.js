import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BattleScene from './battleScene';
import  MainMenu  from './mainMenu';

export const StartPage = () => {
  
  return (
    <Router>
        
      <Switch>
        <Route path='/singleGame'>
          <BattleScene />
        </Route>
        <Route path='/'>
          <MainMenu />
        </Route>
      </Switch>
    </Router>

  )
}