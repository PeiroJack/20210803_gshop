/*
* ajax 请求函数
*   返回值: promise对象(异步返回的数据是: response.data)
* */
import axios from 'axios'

export default function (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise = null
    // 执行异步代码
    if (type === 'GET') {
      let dataStr = ''
      // eslint-disable-next-line no-return-assign
      Object.keys(data).forEach(key => dataStr += key + '=' + data[key] + '&')
      if (dataStr !== '') {
        dataStr = dataStr.subString(0, dataStr.lastIndexOf('&'))
      }
      url += '?' + dataStr
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => resolve(response.data)).catch(error => reject(error))
  })
}

// import axios from 'axios'
//
// export default function ajax (url, data = {}, type = 'GET') {
//   return new Promise(function (resolve, reject) {
//     // 执行异步 ajax 请求
//     let promise = null
//     if (type === 'GET') {
//       // 准备 url query 参数数据
//       let dataStr = '' // 数据拼接字符串
//       Object.keys(data).forEach(key => {
//         dataStr += key + '=' + data[key] + '&'
//       })
//       if (dataStr !== '') {
//         dataStr = dataStr.substring(0, dataStr.lastIndexOf('&')) // 去除 末尾 &
//         url = url + '?' + dataStr
//       }
//       // 发送 get 请求
//       promise = axios.get(url)
//     } else {
//       // 发送 post 请求
//       promise = axios.post(url, data)
//     }
//
//     promise.then(function (response) {
//       // 成功了调用 resolve()
//       resolve(response.data)
//     }).catch(function (error) {
//       // 失败了调用 reject()
//       reject(error)
//     })
//   })
// }
