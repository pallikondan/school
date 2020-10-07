import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { loadingBarReducer } from 'react-redux-loading-bar'

import Login from "./login";
import School from './school'



const RootReducer = (history) => combineReducers({
    router: connectRouter(history),
    loadingBar: loadingBarReducer,
    Login,
    School
});
export default RootReducer
