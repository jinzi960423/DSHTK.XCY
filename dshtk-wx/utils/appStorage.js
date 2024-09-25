export default {

    //保存token
    setToken(token) {

        uni.setStorageSync('token', token)
    },

    //获取token
    getToken() {

        return uni.getStorageSync('token')
    },
}