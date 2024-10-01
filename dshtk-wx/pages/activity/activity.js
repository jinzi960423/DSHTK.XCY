import common from "../../utils/common.js"
import appStorage from '../../utils/appStorage.js'
export default {
	/***
	获取集赞中的
	****/
	GetWarehouseEntity(openId, prizeId, businessId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetWarehouseEntity',
				method: "GET",
				data: {
					OpenId: openId,
					PrizeId: prizeId,
					BusinessId: businessId
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
	/**
	 * 获取活动列表
	 **/
	GetPrizeList(businessId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetPrizeList',
				method: "GET",
				data: {
					BusinessId: businessId,
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