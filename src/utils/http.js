import axios, { CancelToken } from 'axios';
import Cookies from 'js-cookie';
import {
  message
} from 'antd';
import Qs from 'qs'

export const pendingReq = {};

const http = axios.create({
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: 'repeat'
    })
  }
});

http.interceptors.request.use(config => {
  let Authorization = Cookies.get('Authorization');
  config.headers = {
    ...config.headers,
  }

  // 频繁操作时，取消同一个接口的前一次请求
  if (!config.noNeedCancel) {
    const key = config.url + '&' + config.method;
    pendingReq[key] && pendingReq[key]('The operation is too frequent~');

    config.cancelToken = new CancelToken((c) => {
      pendingReq[key] = c;
    });
  }

  if (Authorization) {

    config.headers = {
      ...config.headers,
      
    };
  }

  return config;
}, (error) => {
  // 对请求错误做些什么
  console.log('err:', error)
  return Promise.reject(error);
});

http.interceptors.response.use(response => {
  if (!response.noNeedCancel) {
    const key = response.config.url + '&' + response.config.method;
    pendingReq[key] && delete pendingReq[key];
  }
  return response;
}, err => {
  let errResponse = err?.response??{}

  console.log('errObj:', errResponse)

  
  message.error(errResponse?.data && errResponse?.data?.error && errResponse?.data?.error?.message || errResponse?.statusText || 'Something went wrong, please try again later');
  return Promise.reject(errResponse);

})
export default http