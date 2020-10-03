import Cookies from 'js-cookie'

const TokenKey = 'Access-Token';

export function getAuthToken() {

  return Cookies.get(TokenKey)

}

export function setAuthToken(token  ) {

  return Cookies.set(
      TokenKey,
token
  )
}

export function removeAuthToken() {

  return Cookies.remove(TokenKey)

}


