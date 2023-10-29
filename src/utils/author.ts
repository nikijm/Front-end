/*
 * @Descripttion: 文件描述
 * @Author: jenny
 * @Date: 2023-10-24 13:46:07
 * @LastEditors: jenny
 * @LastEditTime: 2023-10-25 08:57:31
 */
import { useCookies } from 'vue3-cookies'
import { TEMP_TOKEN, TOKEN } from '../config/constant'

const { cookies } = useCookies()

export function getToken (): string {
  return cookies.get(TOKEN) || ''
}

export function getTempToken (): string {
  return sessionStorage.getItem(TEMP_TOKEN) || ''
}

export function clear () {
  cookies.remove(TOKEN)
  localStorage.clear()
}
