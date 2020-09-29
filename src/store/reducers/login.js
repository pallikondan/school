import { reducerTypes } from '../constants/index'
import {getAuthToken,setAuthToken,removeAuthToken} from '../../utils/Auth'
import inititalState from '../initialState'

let accessToken = getAuthToken();

// const inititalState = {
//     login: {
//         success: false,
//         error: false,
//         pending: false,
//     },
//     accessToken,
//     profile: {}
// },

 const { login } = reducerTypes,

 Login = (state = inititalState, action) => {

    switch (action.type) {

        case login.LOGIN:
            return true;
        case login.LOGIN_PENDING:
            return state = {
                ...state,
                login: {
                    ...state.login,
                    pending: action.payload
                }
            };
        case login.LOGIN_SUCCESS:
            return state = {
                ...state,
                login: {
                    ...state.login,
                    success: true,
                }
            };
        case login.LOGIN_ERROR:
            return state = {
                ...state,
                login: {
                    ...state.login,
                    error: action.payload
                }
            };
        case login.SET_ACCESSTOKEN:
            setAuthToken(action.payload);
            return state = {
                accessToken: action.payload
            };
        case login.LOGOUT:
        case login.UNAUTHOURIZED:
            removeAuthToken();
            return state = {
                accessToken: null
            };
        default:
            return state
    }

};

export default Login;


