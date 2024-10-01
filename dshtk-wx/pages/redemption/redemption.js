import common from "../../utils/common.js"
import appStorage from '../../utils/appStorage.js'
export default {
	/**
	 * 获取券详情
	 **/
	GetUserPrizeDetail(openId, businessId, prizeId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetUserPrizeDetail',
				method: "GET",
				data: {
					OpenId: openId,
					BusinessId: businessId,
					PrizeId: prizeId
				},
				success: function(res) {
					resolve(res.data);
				},
				fail: function() {
					reject('网络异常，操作失败');
				}
			})
		})
	},
	/***
	获取礼品详情
	*****/
	GetPrizeEntity(prizeId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetPrizeEntity',
				method: "GET",
				data: {
					PrizeId: prizeId
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