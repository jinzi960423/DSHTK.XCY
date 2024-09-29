import common from "../../utils/common.js"
export default {
	/**
	 * 保存微信用户的的相关信息
	 * @param {Object} openid
	 * @param {Object} headImg
	 * @param {Object} nickName
	 */ 
	saveUserInfo(openid, headImg, nickName) {
		return new Promise((resolve, reject) => {
			//发起网络请求
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/SaveUserInfo',
				method: "POST",
				data: {
					OpenId: openid,
					NickName: nickName ,
					WxIcon: headImg,
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