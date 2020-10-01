import initialState from '../initialState'
import { reducerTypes } from '../constants/index'

const { schoolList } = reducerTypes;

function school(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case schoolList.GET_SCHOOL_LIST_REQUEST:
        return {
            ...state,
            schoolListLoading: true
        };
      case schoolList.GET_SCHOOL_LIST_SUCCESS:
          console.log(" saga called 4 ")


          return {
              ...state,
              schoolListLoading: false,
              schoolList: payload
          };
          case schoolList.GET_SCHOOL_LIST_FAILURE:
        return {
            ...state,
            schoolListLoading: false
        }
        default:
            return state

    }
}

export default school