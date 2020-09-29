import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import reducers from './reducers'
import rootSaga from './sagas'
import initialState from './initialState';

  const  sagaMiddleware = createSagaMiddleware();

   const store = createStore(
        // Other reducer
        reducers,
        initialState,
        applyMiddleware(
            sagaMiddleware,
        )
    );
sagaMiddleware.run(rootSaga);


export default store;
