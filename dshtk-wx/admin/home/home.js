import common from "../../utils/common.js"

export default {

	/**
	 * 商户核销
	 **/
	WriteOff(number, businessId) {
		return new Promise((resolve, reject) => {
			//发起网络请求
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/WriteOff',
				method: "GET",
				data: {
					Number: number,
					BusinessId: businessId,
				},
				success: function(res) {
					console.log(res.data);
					resolve(res.data);

				},
				fail: function() {
					reject('网络异常，操作失败');
				}
			})
		})
	}
}