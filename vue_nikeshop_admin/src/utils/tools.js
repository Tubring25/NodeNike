export function setSession(name, data) {
  return sessionStorage.setItem(name, JSON.stringify(data))
}

export function getSession(name) {
  return JSON.parse(sessionStorage.getItem(name))
}

export function removeSession(name) {
  return sessionStorage.removeItem(name)
}