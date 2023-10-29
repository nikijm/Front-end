/*
 * @Descripttion: 文件描述
 * @Author: jenny
 * @Date: 2022-04-19 13:43:40
 * @LastEditors: jenny
 * @LastEditTime: 2023-01-06 18:20:29
 */

import axios, { type AxiosRequestConfig, type AxiosInstance, type AxiosResponse } from 'axios';
import { Message } from 'view-ui-plus'
import type { IResponseData } from '@/typings/request';


import { getToken, getTempToken, clear } from '@/utils/author'
// import * as loadingUrl from '@/config/loadingUrl'
import * as shortTimeoutUrl from '@/config/shortTimeoutUrl'

const loginUrl = import.meta.env.VITE_BASE_PATH + 'user/login'

type TAxiosOption = {
  baseURL: string;
  timeout: number;
}

const config: TAxiosOption = {
  baseURL: import.meta.env.VITE_BASE_URL + '/api/web/terminal',
  timeout: 60000
}

// let loadingService: LoadingInstance
// const loadingOpts: LoadingOptions = {
//   target: '#main-applayout',
//   fullscreen: true,
//   body: false,
//   // target: 'body',
//   lock: true,
//   text: 'Loading',
//   spinner: '',
//   background: 'rgba(255, 255, 255, 0.7)'
// }

// 不需要loading的url 部分请求同时伴随遮罩层 loading会与遮罩层冲突 造成闪动
const noLoadingUrl = ['/ums/authority/list', '/ums/authority/get', '/ums/user/virtual/get', '/ums/company/tree/get', '/ums/role/nameList']
// 需要loading的url
// const needLoading:string[] = Object.values(loadingUrl)
// post上传文件
const postUploadUrl = ['/oss/minio/upload']
// timeout 30s的url
const shortTimeoutUrls:string[] = Object.values(shortTimeoutUrl)

class Http {
  private service: AxiosInstance;

  constructor (config: TAxiosOption) {
    this.service = axios.create(config)

    this.service.interceptors.request.use(
      (config: any) => {
        if (config.method === 'put') {
          config.headers!['Content-Type'] = 'multipart/form-data'
        } else {
          if (config.url && postUploadUrl.includes(config.url)) {
            config.headers!['Content-Type'] = 'multipart/form-data'
          } else if (config.url && shortTimeoutUrls.includes(config.url)) {
            config.headers!.timeout = 30000
            config.headers!['Content-Type'] = 'application/json'
            config.data = JSON.stringify(config.data)
          } else {
            config.headers!['Content-Type'] = 'application/json'
            config.data = JSON.stringify(config.data)
          }

          config.headers!.Authorization = getToken()
          config.headers!.tempToken = getTempToken()

          // 不需要loading
          // if (config.url && !noLoadingUrl.includes(config.url)) {
          //   loadingService = ElLoading.service(loadingOpts)
          // }

          // 需要loading
          // if (config.url && needLoading.includes(config.url)) {
          //   loadingService && loadingService.close()
          //   loadingService = ElLoading.service(loadingOpts)
          // }

          config.url += '?timestamp=' + new Date().getTime()
        }

        return config
      },
      (error) => {
        // loadingService && loadingService.close()
        // onmessage.error('请求错误')
        return Promise.reject(error)
      }
    )

    this.service.interceptors.response.use(
      (response: any) => {
        // loadingService && loadingService.close()

        // 处理token失效
        // 服务端验证token会采用IP等验证 所以 切换设备也会导致token验证失败，即使token未过期
        // 只要token验证失败，清除token 重定向到登录页面
        const { code } = response.data
        if (code === 10003) {
          Message.closeAll()
          Message.error('您的登陆状态发生变化或过期，请重新登录')
          clear()
          setTimeout(() => window.location.assign(loginUrl), 1500)
          return
        }

        return response
      },
      error => {
        // loadingService && loadingService.close()
        if (!error.message.includes('timeout')) {
          Message.closeAll()
          Message.error('请求错误')
        }
        return Promise.reject(error)
      }
    )
  }

  get<T> (url: string, params?: object, _object = {}): Promise<IResponseData<T>> {
    return this.service.get(url, { params, ..._object })
  }

  post<T> (url: string, params?: object, _object = {}): Promise<IResponseData<T>> {
    return this.service.post(url, params, _object)
  }

  put<T> (url: string, body: any): Promise<IResponseData<T>> {
    return this.service.put(url, body)
  }
}

export default new Http(config)
