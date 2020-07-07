import Cookies from 'js-cookie';
const keyName = 'admin-key'

export function getCookie () {
  return Cookies.get(keyName);
}

export function setCookie(token){
  return Cookies.set(keyName, token)
}

export function removeCookie() {
  return Cookies.remove(keyName)
}

