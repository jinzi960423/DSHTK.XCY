import common from "../../utils/common.js"

export default {

	/**
	 * 绑定用户和商户的关系
	 ***/
	BindingBusiness(openId, businessId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/BindingBusiness',
				method: "GET",
				data: {
					OpenId: openId,
					BusinessId: businessId,
				},
				success: function(res) {
					//console.log(res.data);
					resolve(res.data);
				},
				fail: function() {
					reject('网络异常，操作失败');
				}
			})
		})
	},
	/***
	 *  保存用户的中奖信息
	 **/
	SaveWheelLottery(openId, businessId, prizeId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/WheelLottery',
				method: "GET",
				data: {
					OpenId: openId,
					BusinessId: businessId,
					PrizeId: prizeId,
				},
				success: function(res) {
					//console.log(res.data);
					resolve(res.data);
				},
				fail: function() {
					reject('网络异常，操作失败');
				}
			})
		})
	},
	/**
	 * 用户参与摇奖
	 **/
	DrawLottery(businessId, openId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/DrawLottery',
				method: "GET",
				data: {
					OpenId: openId,
					BusinessId: businessId,
				},
				success: function(res) {
					//console.log(res.data);
					resolve(res.data);
				},
				fail: function() {
					reject('网络异常，操作失败');
				}
			})
		})
	},
	/**
	 * 获取转盘的奖品列表
	 **/
	GetPrizeConfigList(businessId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetDrawLotteryPrizeList',
				method: "GET",
				data: {
					BusinessId: businessId,
				},
				success: function(res) {
					//console.log(res.data);
					resolve(res.data);
				},
				fail: function() {
					reject('网络异常，操作失败');
				}
			})
		})
	}
	
}