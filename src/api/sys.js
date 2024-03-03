// 封装登陆模块,return一个promise对象
import request from '@/utils/request'
export const login = data => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
