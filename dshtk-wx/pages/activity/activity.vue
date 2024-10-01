<template>
	<view>
		<z-paging ref="paging" v-model="prizeList">
			<template #top>
				<view class="column-c-c p-b-30">
					<text
						class="m-t-40 m-b-20 fw-bold font-family color-1d1d1d fs48">{{businessInfo.BnsinessName}}</text>
					<u-icon name="map" color="#1d1d1d" size="24rpx" :label="businessInfo.Address" label-color="#1d1d1d"
						@click="openMap" label-size="24rpx"></u-icon>
				</view>
			</template>
			<view v-for="(item,index) in prizeList" :key="index" class="row m-b-20 p-lr-20" @click="JumpPage(item.Id)">
				<net-image width="300rpx" height="300rpx" :imageUrl="item.ImgUrl"></net-image>
				<view class="column m-l-20 flex1 p-b-10 p-t-10" style="justify-content: space-between;">
					<view class="column">
						<text class="fs32 fw-400 color-1d1d1d">{{item.Name}}</text>
						<text class="m-t-30 color-666 fw-400">仅需<text class="fw-bold">{{item.PrizeLike}}</text>人助力，即可领取</text>
					</view>
					<view class="item-btn">
						<u-icon name="arrow-right-double" size="28rpx" color="white" label="马上摇人" label-color="white"
							label-size="28rpx" labelPos="left"></u-icon>
					</view>
				</view>
			</view>
			<template #bottom>
				<view class="p-t-20">
					<safe-bottom-view>
						<bottom-support-info></bottom-support-info>
					</safe-bottom-view>
				</view>
			</template>
		</z-paging>
	</view>
</template>
<script>
	import activityApi from './activity.js';
	import commonutils from '../../utils/common.js'
	import appStorage from '../../utils/appStorage.js'
	export default {
		data() {
			return {
				openId: "",
				businessInfo: {},
				prizeList: [],
				businessId: "",
			};
		},
		mounted() {
			commonutils.GetOpenId().then(openId => {
				this.openId = openId;
				this.businessId = appStorage.getStorage("businessId");
				//获取当前商户的信息
				commonutils.GetBusinessInfoById(this.businessId).then(businessInfo => {
					this.businessInfo = businessInfo.Data;
				})
				activityApi.GetPrizeList(this.businessId).then(prizeList => {
					this.prizeList = prizeList.Data;
				})
			})
		},
		methods: {
			openMap() {
				wx.openLocation({
					latitude: parseFloat(this.businessInfo.Longitude), // 纬度  
					longitude: parseFloat(this.businessInfo.Latitude), // 经度  
					name: this.businessInfo.BnsinessName, // 地点名称  
					address: this.businessInfo.Address, // 地址的详细说明  
					scale: 13, // 缩放比例  
					success: function(res) {
						console.log('打开地图成功');
					},
					fail: function(err) {
						console.log('打开地图失败', err);
					}
				});
			},
			JumpPage(prizeId) {
				console.log(prizeId)
				activityApi.GetWarehouseEntity(this.openId, prizeId, this.businessId).then(data => {
					console.log(data)
					if (data.Success) {
						uni.$u.route('/pages/forward/forward?Id=' + data.Data.Id+"&businessId="+this.businessId+"&openId="+this.openId)
					} else {
						uni.showModal({
							title: '温馨提示',
							content: data.Message,
							showCancel: false,
							success: function(res) {
								if (res.confirm) {
									uni.$u.route('/pages/mine/mine')
								}
							}
						});
					}
				})

			}
		},
	}
</script>

<style>
	page {
		background-color: white;
	}
</style>

<style lang="scss" scoped>
	.item-btn {

		height: 70rpx;
		background: linear-gradient(0deg, #FF7C79, #FE8A62);
		border-radius: 35rpx;
		width: 280rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>