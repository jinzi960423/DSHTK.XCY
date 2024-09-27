export default {

    //保存token
    setStorage(key, value) {

        uni.setStorageSync(key, value)
    },

    //获取token
    getStorage(key) {

        return uni.getStorageSync(key)
    },
}