import { reducerTypes } from '../constants/index'
import inititalState from '../initialState'



 const { login } = reducerTypes,

 Login = (state = inititalState, action) => {

    switch (action.type) {

        case login.LOGIN:
            return state;
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
                    isAuthorized: true
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
        default:
            return state
    }

};

export default Login;


