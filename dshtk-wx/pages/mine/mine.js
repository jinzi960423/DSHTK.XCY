import common from "../../utils/common.js"
import appStorage from '../../utils/appStorage.js'
export default {

	/**
	 * 获取我的小仓库
	 **/
	GetPrizeListByOpenId(businessId, openId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetPrizeListByOpenId',
				method: "GET",
				data: {
					BusinessId: businessId,
					OpenId: openId,
				},
				success: function(res) {
					resolve(res.data);
				},
				fail: function() {
					reject('网络异常，操作失败');
				}
			})
		})
	}
}