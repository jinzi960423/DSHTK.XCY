<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'auto')"></page-meta>
	<view style="position: relative;">
		<image src="https://www.sfj365.com/dshtk/images/turntable_bg.jpg" mode="aspectFill"
			style="width: 100vw;;height: 100vh;">
		</image>
		<view class="column" style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;">
			<view class="row-c" style="margin-top: 120rpx;margin-left: 40rpx;">
				<text class="top-title">点一点，锦上添花！</text>
			</view>
			<view class="column-c-c" style="margin-top: 140rpx;">
				<image src="https://www.sfj365.com/dshtk/images/turntable_wz.png" mode="widthFix" style="width: 80%;">
				</image>
				<text class="shop-title">{{businessInfo.BnsinessName}}</text>
				<view style="margin-top: 100rpx;">
					<my-turntable-draw ref="raffleWheel" :prizeList="prizeList" :targetIndex="targetIndex"
						@befoterClick="befoterClick" @afterClick="afterClick">
					</my-turntable-draw>
				</view>
				<text class="m-t-40 fs28" style="color: #4E3531;">奖品由门店提供，消费时领取。</text>
				<view class="m-t-40 p-b-30">
					<bottom-support-info></bottom-support-info>
				</view>
			</view>
		</view>
	</view>

	<set-avatar-dialog :show="userInfoDialog" @close="handleClose"></set-avatar-dialog>

</template>

<script>
	import appStorage from '../../utils/appStorage.js'
	import commonutils from '../../utils/common.js'
	import turntableApi from './turntable.js'
	export default {
		data() {
			return {
				id: "f290c26b-54a2-443d-8303-d468784acfc4",
				openId: "",
				businessId: "2CCDB239-7F9E-4A4F-A16D-AF873D6964D0",
				businessInfo: {
					BnsinessName: ""
				},
				userInfoDialog: false,
				prizeList: [],
				targetIndex: 0, //中奖的商品对应的小标
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.businessId = options.businessId;
			this.sourceOpenId = options.openId;
			
		},
		mounted() {
			if (this.businessId == "") {
				uni.showModal({
					title: '温馨提示',
					content: "无效的商户二维码",
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							//uni.$u.route('/pages/home/home', '')
						}
					}
				});
			}
			commonutils.GetOpenId().then(openId => {
				this.openId = openId;
				appStorage.setStorage("businessId", this.businessId);
				turntableApi.BindingBusiness(openId, this.businessId)
			})
			commonutils.GetUserInfo().then(data => {
				//console.log(data)
				//this.userInfoDialog = !data.Success;
				if (!data.Success) {
					turntableApi.saveUserInfo(this.openId, '', '点上花')
				}
			})
			//获取转盘的奖品列表
			turntableApi.GetPrizeConfigList(this.businessId).then(data => {
				console.log(data)
				if (!data.Success) {
					uni.showModal({
						title: '温馨提示',
						content: data.Message,
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								uni.$u.route('/pages/home/home', '')
							}
						}
					});
				}
				this.prizeList = data.Data;
			})
			//获取商户的详细信息
			commonutils.GetBusinessInfoById(this.businessId).then(data => {
				this.businessInfo = data.Data;
			})
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			befoterClick(data) {
				turntableApi.WarehouseLike(this.id, this.openId).then(likeData => {
					console.log(likeData)
					if (this.id != "") {
						commonutils.showToast(likeData.Message, "success");
					}
					turntableApi.DrawLottery(this.businessId, this.openId).then(drawData => {
						console.log(drawData)
						if (drawData.Success) {
							var Id = drawData.Data.Id;
							for (var i = 0; i < this.prizeList.length; i++) {
								if (this.prizeList[i].Id == Id) {
									this.targetIndex = i; //中奖的数据下标
								}
							}
							if (data.type == 'start') {
								data.callback && data.callback(this.targetIndex)
							}
						} else {
							if (data.type == 'start') {
								this.targetIndex = 5;
								data.callback && data.callback(this.targetIndex)
							}
							// uni.showModal({
							// 	title: '温馨提示',
							// 	content: drawData.Message,
							// 	showCancel: false,
							// 	success: function(res) {
							// 		if (res.confirm) {
							// 			if (data.type == 'start') {
							// 				data.callback && data.callback(-1)
							// 			}
							// 			uni.$u.route('/pages/home/home', '')
							// 		}
							// 	}
							// });
						}
					}).catch(error => {
						commonutils.showToast(error, "error");
					})
				})
			},
			//转盘结束后
			afterClick(data) {
				if (data.type == 'end') {
					data.callback && data.callback()
					console.log(data.content)
					//保存用户的中奖信息
					turntableApi.SaveWheelLottery(this.openId, this.businessId, data.content.Id).then(saveres => {
						uni.$u.route('/pages/home/home', data.content)
					})

				}
			},
			handleClose() {
				this.userInfoDialog = false; // 关闭弹窗 
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-title {
		font-weight: normal;
		font-size: 37rpx;
		color: #FFFFFF;
		font-family: Alibaba PuHuiTi 3.0;
	}

	.shop-title {
		height: 70rpx;
		font-family: Alibaba PuHuiTi 3.0;
		font-weight: normal;
		font-size: 73rpx;
		color: #FFFFFF;
		margin-top: 30rpx;
	}
</style>