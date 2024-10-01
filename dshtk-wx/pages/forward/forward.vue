<template>
	<view class="column" v-if="shareShow">
		<image src="https://www.sfj365.com/dshtk/images/personal_bg.png" mode="widthFix" style="width: 100%;"></image>
		<text class="top-title">好友助力领好礼</text>
		<view class="content-bg p-tb-30 p-lr-30">
			<net-image height="300rpx" width="100%" :imageUrl="warehouseInfo.ImgUrl"></net-image>
			<view class="column-c-c m-t-30">
				<text class="fs32 color-white row-c-c"
					style="background-color: #FF6C4E;height:60rpx;border-radius: 30rpx;padding: 0 60rpx;">
					{{warehouseInfo.Remark}}
				</text>
				<text class="fs28 color-999 m-t-20 fw-400">
					还差{{warehouseInfo.Count}}人即可获得
				</text>
			</view>
			<view class="row m-t-40" style="flex-wrap: wrap;">
				<view v-for="(item,index) in likeList" :key="index" class="column-c-c m-b-30 m-r-20">
					<net-image width="90rpx" height="90rpx" radius="45rpx" imageUrl="https://www.sfj365.com/dshtk/images/user.png"></net-image>
					<text class="zhuli-bg row-c-c">已助力</text>
				</view>
			</view>
		</view>
		<button class="invite-btn" open-type="share">邀请好友助力</button>
		<view class="m-t-40 p-b-30">
			<bottom-support-info></bottom-support-info>
		</view>
	</view>

<!-- 分享页面 -->
	<view class="column" v-else-if="!shareShow">
		<image src="https://www.sfj365.com/dshtk/images/personal_bg.png" mode="widthFix" style="width: 100%;">
		</image>
		<view class="content-bg p-tb-30 p-lr-30" style="padding-bottom: 100rpx;">
			<text>好友助力领好礼</text>
			<net-image height="300rpx" width="100%" :imageUrl="warehouseInfo.ImgUrl"></net-image>
			<view class="column-c-c m-t-30">
				<text class="fs32 color-white row-c-c m-b-30"
					style="background-color: #FF6C4E;height:60rpx;border-radius: 30rpx;padding: 0 60rpx;">
					{{warehouseInfo.Remark}}
				</text>
				<!-- <net-image height="385rpx" width="385rpx"></net-image> -->
				<!-- <view class="m-t-20 fs28 color-1d1d1d">识别图中二维码，助力即可</view> -->
				<button class="invite-btn" @click="UserAssist">点击为好友助力</button>
			</view>
		</view>
		<view class="m-t-40 p-b-30">
			<bottom-support-info></bottom-support-info>
		</view>
	</view>
</template>
<script>
	import forwardApi from './forward.js'
	import commonutils from '../../utils/common.js'
	import appStorage from '../../utils/appStorage.js'
	export default {
		data() {
			return {
				id: "",
				sourceOpenId: "",
				sourcebusinessId: "",
				openId: "",
				businessId: "",
				warehouseInfo: {},
				shareShow: true,
				likeList: []
			}
		},
		onLoad(options) {
			this.id = options.Id;
			this.sourceOpenId = options.openId;
			this.businessId = options.businessId;
		},
		mounted() {
			commonutils.GetOpenId().then(openid => {
				if (openid != this.sourceOpenId) {
					this.shareShow = false;
				}
			})
			//this.businessId = appStorage.getStorage("businessId");
			forwardApi.GetWarehouseDetail(this.id).then(data => {
				this.warehouseInfo = data.Data;
			})
			forwardApi.GetLikeListByWarehouseId(this.id).then(data => {
				console.log(data)
				this.likeList = data.Data;
			})
		},
		methods: {
			UserAssist() {
                 uni.$u.route('/pages/turntable/turntable?id='+this.id+"&businessId="+this.businessId+"&sourceOpenId="+this.openId)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-title {
		font-weight: 400;
		font-size: 60rpx;
		color: #FFFFFF;
		width: 100%;
		text-align: center;
		margin-top: -300rpx;
	}

	.content-bg {
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 11rpx 0rpx rgba(255, 69, 85, 0.38);
		border-radius: 20rpx;
		margin-left: 22rpx;
		margin-right: 22rpx;
		margin-top: 40rpx;
	}

	.zhuli-bg {
		width: 120rpx;
		height: 40rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		border: 2rpx #F5574E solid;
		color: #F5574E;
		font-size: 24rpx;
	}

	.invite-btn {
		height: 86rpx;
		background: linear-gradient(90deg, #FF8A48 0%, #FF4057 100%);
		border-radius: 43rpx;
		font-weight: 400;
		font-size: 32rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 100rpx;
		margin-left: 22rpx;
		margin-right: 22rpx;
	}
</style>