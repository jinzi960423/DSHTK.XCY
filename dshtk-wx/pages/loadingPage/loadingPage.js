import common from "../../utils/common.js"

export default {
	//好友助力
	WarehouseLike(warehouseId, openId, businessId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/WarehouseLike',
				method: "GET",
				data: {
					WarehouseId: warehouseId,
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
	}
}