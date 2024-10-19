import common from "../../utils/common.js"
import appStorage from '../../utils/appStorage.js'
export default {
	/***
	获取所有的商户列表
	**/
	GetBusinessList() {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetBusinessList',
				method: "GET",
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
	 * 获取首页的配置
	 **/
	GetHomeConfigList(businessId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetHomeConfigList',
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
	},
	/***
	获取绑定过关系的商户
	****/
	GetBusinessListByOpenId(openId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetBusinessListByOpenId',
				method: "GET",
				data: {
					OpenId: openId,
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