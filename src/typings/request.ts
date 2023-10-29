export interface IResultData<T>{
  code: number
  message: string
  data: T
}

export interface IResponseData<T> {
  status: number
  statusText: string
  data: IResultData<T>
}
