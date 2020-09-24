import { reducerTypes } from '../constants/index'



const { login } = reducerTypes;


export const loginToApp = (data) => ({
    type: 'LOGIN',
    payload: data
})

export const loginPending = () => ({
    type: login.LOGIN_PENDING,
})

export const loginSuccess = (data) => ({
    type: login.LOGIN_SUCCESS,
    payload: data
})

export const loginError = () => ({
    type: login.LOGIN_ERROR
})

export const logout = () => ({
    type: login.LOGOUT
})

export const logoutPending = () => ({
    type: login.LOGOUT_PENDING
})

export const logoutSuccess = (data) => ({
    type: login.LOGOUT_SUCCESS,
    payload: data
})

export const logoutError = () => ({
    type: login.LOGOUT_ERROR
})

export const setAccessToken = (token) => ({
    type: login.SET_ACCESSTOKEN,
    payload: token
})

export const deleteAccessToken = () => ({
    type: login.DELETE_ACCESSTOKEN,
})

export const getAccessToken = () => ({
    type: login.GET_ACCESSTOKEN,
})

export const unloginorized = () => ({
    type: login.UNloginOURIZED
})