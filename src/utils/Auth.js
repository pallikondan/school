import Cookies from 'js-cookie'

const TokenKey = 'Access-Token';

export function getAuthToken() {

  return Cookies.get(TokenKey)

}

export function setAuthToken({data}  ) {

  return Cookies.set(
      TokenKey,
      data.response.token
  )
}

export function removeAuthToken() {

  return Cookies.remove(TokenKey)

}


