import { reducerTypes } from '../constants/index'

const { schoolConstants } = reducerTypes;

const initialState = {
    schoolList:{
        schoolListLoading: false,
            list:[]
    },
    memberList: {
        list:[],
        memberListLoading: false
    },
    registerSchool:{
        loading:false,
            error:false,
            success:false,
            data:[]
    }
}

 const School = (state = initialState, action) =>{
     console.log('from reducerrrr', action);

    switch (action.type) {

        case schoolConstants.GET_SCHOOL_LIST_REQUEST:
            return {
                ...state,
                schoolListLoading: true
            };
          case schoolConstants.GET_SCHOOL_LIST_SUCCESS:
              state.schoolList.list = action.payload;
              return {
                  ...state,
                  schoolListLoading: false,
              };
              case schoolConstants.GET_SCHOOL_LIST_FAILURE:
            return {
                ...state,
                schoolListLoading: false
            }

            case schoolConstants.GET_MEMBER_LIST_REQUEST:
            return {
                ...state,
                memberListLoading: true
            };
          case schoolConstants.GET_MEMBER_LIST_SUCCESS:
              console.log('actionnnn memenbe red', action);
              state.memberList.list = action.payload;
              return {
                  ...state,
                  memberListLoading: false,
              };
              case schoolConstants.GET_MEMBER_LIST_FAILURE:
            return {
                ...state,
                memberListLoading: false
            }

        case schoolConstants.REGISTER_SCHOOL:
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