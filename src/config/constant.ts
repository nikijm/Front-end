/*
 * @Descripttion: 常量
 * @Author: jenny
 * @Date: 2023-10-24 13:29:30
 * @LastEditors: jenny
 * @LastEditTime: 2023-10-24 15:41:27
 */
export const PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuOaP2VziAKSPniz4E0BkREFa9q2QgQwhhq5w9BzQpTVJpJ79EFlb56gxKufXSsnDks8A9W7K/B9ppfJjo2UVWcrlp61dxaa6NACUG0DBI9Ij1jgZNkHZ3V+PcwSXQFmX0CoWUBRkuN/CtqG72muUEoRw9FfRzavS7r+Ce9EwZTQIDAQAB'
export const EXPIRE = 60 * 60 * 12
export const TOKEN = 'wj_token'
export const TEMP_TOKEN = 'wj_temp_token'
export const USERINFO = 'wj_userinfo'
export const LOCAL_VARIABLES = 'wj_variables'
export const ABILITY_MENU_ROUTE_PERMISSION = 'wj_ability_menu_route_permission'
export const SERVICE_CODE = 'wj_service_ode'
export const MENU_ROOT_ID = 'wj_menu_root_id'
export const DEFAULT_OPENEDS = 'wj_default_openeds'
export const MENU_ROOT_ID_DEFAULT = -1
export const EMPTY_ROUTER = '/empty'
// export const RESOURCE_DOMAIN_WJ = 'https://yun.wujia.cn:9000/'
export const COVER_IMAGE_SYS = 'wujiayun-h5/static/20221223/936825e4-f97e-4ab4-b053-9243ec187965.png'

export const MSG_STAMP = {
  // text: 'text',
  text: 'varchar', // 正常的输入文本
  sign: 'sign', // 签名
  url: 'url', // 网址
  shortUrl: 'shortUrl', // 短网址
  dataset: 'collection', // 数据集
  sub: 'td', // 退订
  column: 'quote', // 选择的数据表或上传的excel【列】
  var: 'variables', // 变量
  tailNumber: 'tailNumber' // 4位手机尾号
}
export const CHANNNELS = {
  route: 'route',
  temporary: 'temporary'
}
