import appStorage from './appStorage.js'
export default {

	//服务器接口
	baseUrl() {
		return 'https://www.sfj365.com/dshtk.web/'
	},
	showToast(title, icon) {
		uni.showToast({
			title: title,
			icon: icon,
			duration: 850
		});
	},
	/**
	 * 获取商户的详细信息
	 **/
	GetBusinessInfoById(businessId) {
		var th = this;
		return new Promise((resolve, reject) => {
			wx.request({
				url: th.baseUrl() + 'api/WeChatProgram/GetBusinessById',
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
	/**
	 * 获取注册的小程序用户信息
	 **/
	GetUserInfo() {
		var th = this;
		return new Promise((resolve, reject) => {
			th.GetOpenId().then(openid => {
				wx.request({
					url: th.baseUrl() + 'api/WeChatProgram/GetUserInfo',
					data: {
						OpenId: openid
					},
					success: function(res) {
						console.log(res)
						resolve(res.data);
					},
					fail: function() {
						reject('获取openid失败');
					}
				})
			}).catch(error => {
				console.log("获取openid失败" + error)
			})
		})
	},
	/**
	 * 
	 * 获取小程序用户的openid
	 **/
	GetOpenId() {
		var th = this;
		return new Promise((resolve, reject) => {
			var openid = appStorage.getStorage("openid")
			if (openid) {
				resolve(openid);
			} else {
				wx.login({
					success(res) {
						console.log(res)
						if (res.code) {
							//发起网络请求
							wx.request({
								url: th.baseUrl() + 'api/WeChatProgram/GetOpenId',
								data: {
									code: res.code
								},
								success: function(res) {
									console.log(res)
									appStorage.setStorage("openid", res.data.Data)

									console.log(res.data.Data);
									resolve(res.data.Data);

								},
								fail: function() {
									reject('获取openid失败');

								}
							})
						} else {
							console.log('登录失败！' + res.errMsg)
							reject('登录失败！' + res.errMsg);

						}
					}
				})
			}
		})
	}

}