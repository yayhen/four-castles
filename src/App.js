import './App.css';
import { MainMenu } from './pages/mainMenu';
import { StartPage } from './pages/startPage';
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import {actionReduser} from './redusers/position.reduser.js'

const store = createStore(actionReduser);

store.dispatch({
  type:"NEW_POSITION",
  pos: {
    x: 0,
    y: 0,
  }
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <StartPage />
      </div>
    </Provider>
  );
}

export default App;
