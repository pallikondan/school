import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import Login from "./login";
import School from './school'



const RootReducer = (history) => combineReducers({
    router: connectRouter(history),
    Login,
    School
});
export default RootReducer
