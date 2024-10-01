import common from "../../utils/common.js"
import appStorage from '../../utils/appStorage.js'
export default {
	GetWarehouseDetail(warehouseId) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetWarehouseDetail',
				method: "GET",
				data: {
					WarehouseId: warehouseId
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
	/****
	获取点赞列表
	****/
	GetLikeListByWarehouseId(warehouseId){
		return new Promise((resolve, reject) => {
			wx.request({
				url: common.baseUrl() + 'api/WeChatProgram/GetLikeListByWarehouseId',
				method: "GET",
				data: {
					WarehouseId: warehouseId
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