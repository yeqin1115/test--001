import axios from "axios";

/* 全局默认配置 */
var http = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
});
//请求之前进行拦截设置
http.interceptors.request.use(config => {
    //设置请求头格式
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    //把登录后的token取过来 放入请求头
    config.headers.Authorization = sessionStorage.getItem('token') || '';
    return config;
}, err => {
    //返回错误信息
    return Promise.reject(err)
})
//响应后拦截器
//请求之前进行拦截设置
http.interceptors.response.use(res => {
    if (response.headers.authorization) {
        sessionStorage.setItem('token', response.headers.authorization)
    }
    if (res.status && res.status === 200) {
        return res.data
    }
}, err => {
    if (err.headers && err.headers.authorization) {
        sessionStorage.setItem('token', response.headers.authorization)
    }
    //返回错误信息
    if (err.response.status === 504 || err.response.status === 404) {
        MessageBox.alert({ message: '哎呦，服务器开小差儿了⊙﹏⊙∥' })
    } else if (err.response.status === 403) {
        MessageBox.alert({ message: '权限不足,请联系管理员!' })
    } else if (err.response.status === 401) {
        MessageBox.alert({ message: '您的用户认证失效，请重新登录！' })
    }
    return Promise.reject(err.response.data.message || '未知异常')
})

const ajaxrequse = {
    get(url, data) {
        http.get(url, {
            params: {
                data
            }
        }).then(
            response => {
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
            .catch(error => {
                reject(error)
            })

    },

    post(url, data) {
        http.get(url, {
            data
        }).then(
            response => {
                resolve(response.data)
            },
            err => {
                reject(err)
            }
        )
            .catch(error => {
                reject(error)
            })

    },

    //下载提取
    uploadFile(url, params) {
        http.axios(
            {
                method: 'post',
                url: `${baseURL}${url}`,
                data: params,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    }
}

export { http, ajaxrequse }