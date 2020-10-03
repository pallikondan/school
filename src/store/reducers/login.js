import { reducerTypes } from '../constants/index'

const  inititalState= {
    success: false,
        error: false,
        pending: false,
        isAuthorized:false,
        isStaff: false,
        profile: {}
}

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
                    isAuthorized: true,
                    isStaff:action.payload.data.response.is_staff,
                    profile: {...action.payload.data.response}
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


