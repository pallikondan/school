import { combineReducers } from 'redux'

import Login from "./login";
import school from './schoolList'

export default combineReducers({
    Login,
    school
})
