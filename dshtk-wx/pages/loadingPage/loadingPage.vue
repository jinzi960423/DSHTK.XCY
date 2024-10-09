<template>
	<view class="column-c-c">

		<!-- 这个scr里内容替换成原型"点击"的网络图 如果图片觉得小调整width,height的值-->
		<image src="https://www.sfj365.com/dshtk/images/transition_01.png"
			style="width: 80rpx;height: 80rpx;margin-top: 230rpx;" mode="aspectFit" @click="WarehouseLike()"></image>
		<text class="title">点一点，锦上添花！</text>
		<!-- 三个点的网路图 -->
		<image src="https://www.sfj365.com/dshtk/images/transition_02.png"
			style="width: 100rpx;height: 20rpx;margin-top: 500rpx;" mode="aspectFit"></image>
		<text class="fs28 color-666 m-t-40">赠人玫瑰，手留余香，也祝您好运相伴！</text>
	</view>
</template>
<script>
	import commonutils from '../../utils/common.js'
	import appStorage from '../../utils/appStorage.js'
	import loadingPageApi from './loadingPage.js'
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
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.businessId = options.bId;
			this.sourceOpenId = options.sourceOpenId;
			//commonutils.showToast(this.id + '==>' + this.businessId, "error");
		},
		mounted() {
			var that = this;
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
									if (!data.Success) {
										turntableApi.saveUserInfo(that.openId, '',
											'点上花')
									}
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
		},
		methods: {
			WarehouseLike() {
				var th = this;
				loadingPageApi.WarehouseLike(th.id, th.openId).then(likeData => {
					console.log(likeData)
					if (th.id != "" && th.id != undefined) {
						uni.showModal({
							title: '温馨提示',
							content: likeData.Message,
							showCancel: false,
							success: function(res) {
								if (res.confirm) {
									//commonutils.showToast(this.id+'==>'+th.businessId, "error");
									uni.$u.route('/pages/turntable/turntable?bId=' + th.businessId)
								}
							}
						});
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.title {
		height: 48rpx;
		font-family: Microsoft YaHei;
		font-weight: bold;
		font-size: 48rpx;
		color: #3E3E3E;
		margin-top: 60rpx;
	}
</style>