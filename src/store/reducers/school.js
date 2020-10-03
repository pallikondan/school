import { reducerTypes } from '../constants/index'

const { schoolConstants } = reducerTypes;

const initialState = {
    schoolList:{
        schoolListLoading: false,
            list:[]
    },
    registerSchool:{
        loading:false,
            error:false,
            success:false,
            data:[]
    }
}

 const School = (state = initialState, action) =>{

    switch (action.type) {

        case schoolConstants.REGISTER_SCHOOL:
            console.log(action.type,action.payload);
            return {...state};

        case schoolConstants.REGISTER_SCHOOL_SUCCESS:
            return {...state};

        case schoolConstants.REGISTER_SCHOOL_FAILURE:
            return {...state};

        default:
            return state

    }
}

export default School