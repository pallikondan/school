import { reducerTypes } from '../constants/index'

const {schoolList} = reducerTypes

export const getSchoolListRequest = () => ({
    type: schoolList.GET_SCHOOL_LIST_REQUEST,
})

export const getSchoolListSuccess = (data) => ({
    type: schoolList.GET_SCHOOL_LIST_SUCCESS,
    payload: data
})

export const getSchoolListFailure = () => ({
    type: schoolList.GET_SCHOOL_LIST_FAILURE
})