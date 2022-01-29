import { setCookie, getCookie, rmCookie } from './cookie'

const tokenKey: string = import.meta.env.VITE_ACCESS_TOKEN_KEY

export const setAccessToken = (token: string) => {
  return setCookie(tokenKey, token)
}

export const getAccessToken = () => {
  return getCookie(tokenKey)
}

export const rmAccessToken = () => {
  rmCookie(tokenKey)
}
