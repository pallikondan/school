import Cookies from 'js-cookie'

const TokenKey = 'Access-Token';
const sampleToken = "123"

export function getAuthToken() {

  return Cookies.get(TokenKey)

}

export function setAuthToken(token  = sampleToken ) {

  return Cookies.set(
    TokenKey,
    token
  )

}

export function removeAuthToken() {

  return Cookies.remove()

}


