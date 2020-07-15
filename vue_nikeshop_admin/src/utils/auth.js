import Cookies from 'js-cookie';
const keyName = 'admin-key'

export function getToken () {
  return Cookies.get(keyName);
}

export function setToken(token){
  return Cookies.set(keyName, token)
}

export function removeToken() {
  return Cookies.remove(keyName)
}

