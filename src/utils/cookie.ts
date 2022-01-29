import cookie from 'js-cookie'

export const setCookie = (key: string, value: string) => {
  return cookie.set(key, value)
}

export const getCookie = (key: string) => {
  return cookie.get(key)
}

export const rmCookie = (key: string) => {
  return cookie.remove(key)
}
