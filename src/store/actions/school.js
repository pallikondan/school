import { reducerTypes } from '../constants/index'

const {schoolConstants} = reducerTypes

export const getSchoolListRequest = () => ({
    type: schoolConstants.GET_SCHOOL_LIST_REQUEST
})

export const getSchoolListSuccess = (data) => ({
    type: schoolConstants.GET_SCHOOL_LIST_SUCCESS,
    payload: data
})

export const getSchoolListFailure = () => ({
    type: schoolConstants.GET_SCHOOL_LIST_FAILURE
})


export const registerSchool = (data) => ({
    type: schoolConstants.REGISTER_SCHOOL,
    payload:data
})

export const registerSchoolSuccess = (data) => ({
    type: schoolConstants.REGISTER_SCHOOL_SUCCESS,
    payload:data
})

export const registerSchoolFailure = (data) => ({
    type: schoolConstants.REGISTER_SCHOOL_FAILURE,
    payload:data
})