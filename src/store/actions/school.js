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

export const getMemberRequest = () => ({
    type: schoolConstants.GET_MEMBER_LIST_REQUEST
})

export const getMemberSuccess = (data) => ({
    type: schoolConstants.GET_MEMBER_LIST_SUCCESS,
    payload: data
})

export const getMemberFailure = () => ({
    type: schoolConstants.GET_MEMBER_LIST_FAILURE
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

export const registerMultipleSchoolRequest = (data) => ({
    type: schoolConstants.REGISTER_MULTIPLE_SCHOOL_REQUEST,
    payload: data
})

export const registerMultipleSchoolSuccess = (data) => ({
    type: schoolConstants.REGISTER_MULTIPLE_SCHOOL_SUCCESS,
    payload: data
})

export const registerMultipleSchoolFailure = () => ({
    type: schoolConstants.REGISTER_MULTIPLE_SCHOOL_FAILURE
})

export const deleteUserRequest = (data) => ({
    type: schoolConstants.DELETE_USER_REQUEST,
    payload:data
})

export const deleteUserSuccess = (data) => ({
    type: schoolConstants.DELETE_USER_SUCCESS,
    payload:data
})

export const deleteUserFailure = (data) => ({
    type: schoolConstants.DELETE_USER_FAILURE,
    payload:data
})