import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import AllRoutes from "./routes";
import store,{history} from './store'
import { ConnectedRouter } from 'connected-react-router'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Provider store={store}>
              <ConnectedRouter history={history}>
              <AllRoutes/>
              </ConnectedRouter>
          </Provider>
      </header>
    </div>
  );
}

export default App;
