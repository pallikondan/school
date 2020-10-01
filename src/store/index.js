import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import reducers from './reducers'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'

const  sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

   const store = createStore(
        // Other reducer
        reducers,

       composeEnhancers(applyMiddleware(
           sagaMiddleware,
           logger
       ))
    );
sagaMiddleware.run(rootSaga);


export default store;
