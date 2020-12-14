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
                    pending: action.payload

            };
        case login.LOGIN_SUCCESS:
            console.log('actionnnnn.payloaddd', action.payload);
            return state = {
                    ...state,
                    success: true,
                    isAuthorized: true,
                    isStaff:action.payload.response.is_staff,
                    profile:action.payload.response

            };
        case login.LOGIN_ERROR:
            return state = {
                    ...state,
                    error: action.payload

            };
        default:
            return state
    }

};

export default Login;


