import common from "../../utils/common.js"

export default {
	updatePwd(account, password, newPwd) {
		return new Promise((resolve, reject) => {
			//发起网络请求
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/UpdatePwd',
				method: "GET",
				data: {
					Account: account,
					Password: password,
					NewPwd: newPwd
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

	},
	/**
	 * 商户登录
	 **/
	BusinessLogin(account, password) {
		return new Promise((resolve, reject) => {
			//发起网络请求
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/BusinessLogin',
				method: "GET",
				data: {
					Account: account,
					Password: password,
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