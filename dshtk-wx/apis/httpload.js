import Request from '@/uni_modules/uview-plus/libs/luch-request/index.js'
import common from '@/utils/common.js'

const request = new Request({
    baseURL: common.baseUrl(),
    timeout: 10000,
})

//请求拦截器
request.interceptors.request.use((config) => {

    config.header = {
        ...config.header,
    }

    const {
        baseURL,
        contentType
    } = config.custom

    if (baseURL) {

        config.baseURL = baseURL
    }

    if (contentType) {

        config.header = {
            ...config.header,
            'content-type': contentType
        }
    }

    console.log('接口请求信息', config)
    return config

}, error => {
    console.log('请求请求报错：', error)
    return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use((response) => {

    console.log('接口进入了成功回调', response)

    uni.hideLoading()

    const {
        errorMessage,
        success,
        data
    } = response.data

    if (success) {

        return data
    }

    uni.$u.toast(errorMessage || '请求失败');

    return Promise.reject(response.data)

}, (error) => {

    console.log('接口进入了失败回调', error)

    uni.hideLoading()

    if (error.data) {

        const {
            errorMessage,
        } = error.data

        if (errorMessage) {

            uni.$u.toast(errorMessage);

        } else if (error.data.error) {

            uni.$u.toast(error.data.status + '：' + error.data.error);
        }

    } else {

        uni.$u.toast('接口请求报错，请稍后再试！');
    }

    return Promise.reject(error)
})

export default request