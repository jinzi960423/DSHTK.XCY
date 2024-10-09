<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'auto')"></page-meta>
	<view class="view-bg" style="background-image: url('https://www.sfj365.com/dshtk/images/turntable_bg.jpg')">

		<view class="column">
			<view class="row-c" style="margin-top: 80rpx;margin-left: 40rpx;">
				<text class="top-title">点一点，锦上添花！</text>
			</view>
			<view class="column-c-c" style="margin-top: 80rpx;">
				<image src="https://www.sfj365.com/dshtk/images/turntable_wz.png" style="width: 600rpx;height: 100rpx;">
				</image>
				<text class="shop-title">{{businessInfo.BnsinessName}}</text>
				<view style="margin-top: 40rpx;">
					<my-turntable-draw ref="raffleWheel" :prizeList="prizeList" :targetIndex="targetIndex"
						@befoterClick="befoterClick" @afterClick="afterClick">
					</my-turntable-draw>
				</view>
				<text class="m-t-40 fs28" style="color: #4E3531;">奖品由门店提供，消费时领取。</text>
				<view class="m-t-40">
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
				id: "",
				openId: "",
				businessId: "",
				sourceOpenId: "",
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
			this.businessId = options.bId;
			this.sourceOpenId = options.sourceOpenId;

			var scene = options.scene;
			if (scene != '' && scene != null && scene != undefined) {
				this.businessId = scene;
			}


		},
		mounted() {
			var that = this;
			if (that.businessId == "") {
				uni.showModal({
					title: '温馨提示',
					content: "无效的商户二维码",
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							wx.exitMiniProgram();
						}
					}
				});
			} else {
				//获取商户的详细信息
				commonutils.GetBusinessInfoById(that.businessId).then(data => {
					that.businessInfo = data.Data;
					uni.getLocation({
						type: 'wgs84',
						success: function(res) {
							//commonutils.showToast('当前位置的经度：' + res.longitude, "success");
							console.log('当前位置的经度longitude：' + res.longitude);
							console.log('当前位置的纬度latitude：' + res.latitude);
							//上海市经纬度区间	东经120度52分至122度12分，北纬30度40分至31度53分=
							//‌重庆市的经纬度区间是东经105°17′至110°11′、北纬28°10′至32°13′。‌
							var longitude = parseFloat(res.longitude)
							var latitude = parseFloat(res.latitude)

							commonutils.GetCityLimitById(that.businessInfo.CityId).then(cityData => {
								console.log(cityData)
								//‌重庆市
								if (longitude < cityData.Data.BeginLongitude || longitude >
									cityData.Data.EndLongitude || latitude <
									cityData.Data.BeginLatitude ||
									latitude > cityData.Data.EndLatitude) {
									uni.showModal({
										title: '温馨提示',
										content: '当前活动仅限' + cityData.Data.CityName,
										showCancel: false,
										success: function(res) {
											if (res.confirm) {
												wx.exitMiniProgram();
											}
										}
									});
								} else {
									commonutils.GetOpenId().then(openId => {
										that.openId = openId;
										appStorage.setStorage("businessId", that
											.businessId);
										turntableApi.BindingBusiness(openId, that
											.businessId)
									})
									commonutils.GetUserInfo().then(data => {
										//console.log(data)
										//this.userInfoDialog = !data.Success;
										if (!data.Success) {
											turntableApi.saveUserInfo(that.openId, '',
												'点上花')
										}
									})
									//获取转盘的奖品列表
									turntableApi.GetPrizeConfigList(that.businessId).then(
										data => {
											console.log(data)
											if (!data.Success) {
												uni.showModal({
													title: '温馨提示',
													content: data.Message,
													showCancel: false,
													success: function(res) {
														if (res.confirm) {
															uni.$u.route(
																'/pages/home/home',
																'')
														}
													}
												});
											}
											that.prizeList = data.Data;
										})
								}
							})
						},
						fail: function(error) {
							console.error('获取位置失败：', error);
							uni.showModal({
								title: '温馨提示',
								content: '获取位置失败,请打开我的>设置>个人信息与权限 允许获取位置信息',
								showCancel: false,
								success: function(res) {
									if (res.confirm) {
										wx.exitMiniProgram();
									}
								}
							});
						}
					});
				})
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			befoterClick(data) {
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
	.view-bg {
		padding-top: 22rpx;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100vw;
		height: 100vh;
	}

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