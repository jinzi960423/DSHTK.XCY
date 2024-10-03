import common from "../../utils/common.js"

export default {
	/**
	 * 商户核销
	 **/
	GetPrizeListByBusinessId(businessId, page, limit) {
		return new Promise((resolve, reject) => {
			//发起网络请求
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetPrizeListByBusinessId',
				method: "GET",
				data: {
					BusinessId: businessId,
					Page: page,
					Limit: limit,
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