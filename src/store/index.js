import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import reducers from './reducers'
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension'
const composeEnhancers = composeWithDevTools({}),
    sagaMiddleware = createSagaMiddleware(),

    store = createStore(
        // Other reducer
        reducers,
        composeEnhancers(applyMiddleware(
            sagaMiddleware,
            logger
        ))
    );
sagaMiddleware.run(rootSaga);


export default store;
