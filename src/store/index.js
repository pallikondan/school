import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import RootReducer from './reducers'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()
const  sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

   const store = createStore(
        // Other reducer
       RootReducer,
       {},
       compose(applyMiddleware(
           sagaMiddleware
       ))
    );


sagaMiddleware.run(rootSaga);


export default store;
