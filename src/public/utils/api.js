import axios from 'axios'
import jsonp from 'jsonp'
import qs from 'qs'

import C from '../conf'

let NoticeFlag = true;

const configData = (type, params) => {
  // POST传参序列化
  if (type === 'post') {
    params = qs.stringify(params)
    return params
  } else if (type === 'put') {
    return qs.stringify({
      ...params,
      _method: 'put'
    })
  } else if (type === 'delete') {
    return qs.stringify({
      ...params,
      _method: 'delete'
    })
  }
  return null
};

function ajax(url, type, options) {

  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: C.HOST + url,
      // timeout:1000,
      params: type === 'get' ? options : null,
      data: configData(type, options)
    })
      .then((result) => {
        if (result && result.status === 200) {
          if (result.data.code === 200) {
            resolve(result.data.data);
          } else if (result.data.code === 403) {
            location.href = './static/html/403.html'
          } else if (result.data.code === 521) {
            location.href = './static/html/521.html'
          } else if (result.data.code === 520) {
            if (NoticeFlag) {
              NoticeFlag = false;
              alert(JSON.stringify({
                title: result.data.msg,
                duration: 2,
                onClose() {
                  NoticeFlag = true;
                }
              }))
            }
            reject({
              error: true,
              msg: result.data.msg,
              code: result.data.code
            });
          } else {
            reject({
              error: true,
              msg: result.data.msg,
              code: result.data.code
            });
          }
        } else {
          reject({
            error: result.error,
            msg: result.msg
          });
        }
      })
      .catch(function (error) {
        // console.log(error, url);
        if (error.request.status === 0) {
          // location.href = 'http://ssa.jd.com/sso/login?ReturnUrl=' + location.href;
        }
        resolve()
      });
  })
}

const config = {
  get(url, options) {
    return new Promise((resolve, reject) => {
      ajax(url, 'get', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  post(url, options) {
    return new Promise((resolve, reject) => {
      ajax(url, 'post', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  put(url, options) {
    const _self = this;
    return new Promise((resolve, reject) => {
      ajax(url, 'put', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  delete(url, options) {
    return new Promise((resolve, reject) => {
      ajax(url, 'delete', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  jsonp(url, options) {
    return new Promise((resolve, reject) => {
      jsonp(`${C.JSONP_HOST}${url}${options}`, null, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    })
  }
};

export default config;
