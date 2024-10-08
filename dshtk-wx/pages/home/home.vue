<template>
	<page-meta :page-style="'overflow:'+(showGift || showShop?'hidden':'auto')"></page-meta>
	<view>
		<z-paging ref="paging" v-model="dataList">
			<template #top>
				<view class="column p-b-20">
					<u-navbar placeholder title="首页" autoBack></u-navbar>
					<view class="row-c-c m-t-20">
						<text class="fw-bold font-family color-1d1d1d p-lr-40 fs48">{{businessInfo.BnsinessName}}</text>
						<view style="position: absolute;right: 20rpx;" v-if="businessInfo.IsOnline=='Y'" class="row-c" @click="showShop=true">
							<image src="https://www.sfj365.com/dshtk/images/switch.png"
								style="width: 24rpx;height: 24rpx;"></image>
							<text class="color-1d1d1d fs24 m-l-10">切换</text>
						</view>
					</view>
					<view class="row-c-c m-t-20">
						<u-icon name="map" color="#1d1d1d" size="24rpx" :label="businessInfo.Address" @click="openMap"
							label-color="#1d1d1d" label-size="24rpx"></u-icon>
					</view>
				</view>
			</template>
			<view v-for="(item,index) in dataList" :key="index" class="row-c-c m-b-20" style="position: relative;"
				@click="$u.route(item.Path)">
				<net-image width="705rpx" height="355rpx" :imageUrl="item.BackgroundImage"></net-image>
				<view class="item-bg p-lr-40">
					<text class="fw-bold font-family color-1d1d1d fs40">{{item.FunctionName}}</text>
					<text class="fw-400 m-t-20 font-family color-1d1d1d fs28">{{item.FunctionDescription}}</text>
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

	<gift-dialog :show="showGift" :info="giftInfo" @close="showGift=false" :imageUrl="imageUrl"></gift-dialog>

	<custom-picker-dialog :show="showShop" @close="showShop=false" :columns="[shopList]"
		@confirm="confirmShop"></custom-picker-dialog>

</template>

<script>
	import homeApi from './home.js'
	import commonutils from '../../utils/common.js'
	import appStorage from '../../utils/appStorage.js'
	export default {
		data() {
			return {
				dataList: [],
				showGift: false,
				showShop: false,
				giftInfo: null,
				shopList: [],
				businessInfo: {},
				imageUrl: "",
			};
		},
		onLoad(options) {
			this.giftInfo = options
			if (options.Id == undefined) {
				this.showGift = false;
			} else {
				this.showGift = true;
				this.imageUrl = options.ImgUrl
			}
		},
		mounted() {
			commonutils.GetOpenId().then(openId => {
				this.openId = openId;
				homeApi.GetBusinessListByOpenId(openId).then(data => {
					this.shopList = data.Data;
					var businessId = appStorage.getStorage("businessId");
					if (businessId == "" || businessId == undefined) {
						appStorage.setStorage("businessId", data.Data[0].Id);
					}
					this.initbusinessInfo()
				})
				
			})
		},
		methods: {
			openMap() {
				wx.openLocation({
					latitude:parseFloat(this.businessInfo.Latitude) , // 纬度  
					longitude: parseFloat(this.businessInfo.Longitude), // 经度  
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
			confirmShop(e) {
				console.log('选中的值', e)
				appStorage.setStorage("businessId", e.value[0].Id);
				this.initbusinessInfo();
			},
			initbusinessInfo() {
				var businessId = appStorage.getStorage("businessId");
				//获取当前商户的信息
				commonutils.GetBusinessInfoById(businessId).then(businessInfo => {
					this.businessInfo = businessInfo.Data;
				})
				//获取主页配置
				homeApi.GetHomeConfigList(businessId).then(config => {
					this.dataList = config.Data;
				});
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
	.item-bg {
		position: absolute;
		border-radius: 13rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.65);
		width: 660rpx;
		height: 300rpx;
	}
</style>