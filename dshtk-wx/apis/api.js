import request from "@/apis/httpload.js";
export default {


    //调用示例再index.vue

    textGet(params) {
        return request.post('store/login', {
            params
        })
    },

    textPost(params) {
        return request.post('store/login', params)
    },


}