import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import AllRoutes from "./routes";
import store from './store'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Provider store={store}>
          <AllRoutes/>
          </Provider>
      </header>
    </div>
  );
}

export default App;
