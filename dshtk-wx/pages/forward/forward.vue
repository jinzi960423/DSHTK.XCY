<template>
	<view class="column" v-if="shareShow">
		<image src="https://www.sfj365.com/dshtk/images/personal_bg.png" mode="widthFix" style="width: 100%;"></image>
		<text class="top-title">好友助力领好礼</text>
		<view class="content-bg p-tb-30 p-lr-30">
			<net-image height="300rpx" width="100%" :imageUrl="warehouseInfo.ImgUrl"></net-image>
			<view class="column-c-c m-t-30">
				<button class="fs32 color-white row-c-c" open-type="share"
					style="background-color: #FF6C4E;height:60rpx;border-radius: 30rpx;padding: 0 60rpx;">
					{{warehouseInfo.Remark}}
				</button>
				<text class="fs28 color-999 m-t-20 fw-400">
					还差{{warehouseInfo.Count}}人即可获得
				</text>
			</view>
			
			<view class="row m-t-40" style="flex-wrap: wrap;">
				<view v-for="(item,index) in likeList" :key="index" class="column-c-c m-b-30 m-r-20">
					<net-image width="90rpx" height="90rpx" radius="45rpx"
						imageUrl="https://www.sfj365.com/dshtk/images/user.png"></net-image>
					<text class="zhuli-bg row-c-c">已助力</text>
				</view>
			</view>
			<net-image height="300rpx" width="100%" :imageUrl="qrUrl"></net-image>
			<view class="column-c-c m-t-30">
				<text class="fs28 color-999 m-t-20 fw-400" style="text-align: center;">截图转发到朋友圈助力</text>
			</view>
		</view> 
	<!-- 	<view class="content-bg p-tb-30 p-lr-30">
			<net-image height="300rpx" width="100%" :imageUrl="qrUrl"></net-image>
			<view class="column-c-c m-t-30">
				<text class="fs28 color-999 m-t-20 fw-400" style="text-align: center;">截图转发到朋友圈助力</text>
			</view>
		</view> -->
		<button class="invite-btn" open-type="share">邀请好友助力或截图到朋友圈助力</button>
		<view style="height: 120rpx;"></view>
		<view class="bottom-view row-c-c">
			<safe-bottom-view>
				<bottom-support-info></bottom-support-info>
			</safe-bottom-view>
		</view>
	</view>

	<!-- 分享页面 -->
	<view class="column" v-else-if="!shareShow">
		<image src="https://www.sfj365.com/dshtk/images/personal_bg.png" mode="widthFix" style="width: 100%;">
		</image>
		<view class="content-bg p-tb-30 p-lr-30" style="padding-bottom: 100rpx;margin-top: -130px;">
			<text>好友助力领好礼</text>
			<net-image height="300rpx" width="100%" :imageUrl="warehouseInfo.ImgUrl"></net-image>
			<view class="column-c-c m-t-30">
				<text class="fs32 color-white row-c-c m-b-30"
					style="background-color: #FF6C4E;height:60rpx;border-radius: 30rpx;padding: 0 60rpx;">
					{{warehouseInfo.Remark}}
				</text>
				<button class="invite-btn" @click="UserAssist">点击为好友助力</button>
			</view>
		</view>
		<view class="bottom-view row-c-c">
			<safe-bottom-view>
				<bottom-support-info></bottom-support-info>
			</safe-bottom-view>
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
				likeList: [],
				qrUrl: "",
			}
		},
		onLoad(options) {
			this.id = options.Id;
			this.sourceOpenId = options.openId;
			this.businessId = options.businessId;
			var th = this;
			var scene = options.scene;
			if (scene != '' && scene != null && scene != undefined) {
				th.id = scene;
				forwardApi.GetWarehouseDetail(scene).then(data => {
					th.warehouseInfo = data.Data;
					th.sourceOpenId = data.Data.OpenId
					th.businessId = data.Data.BusinessId
				})
			} else {
				th.qrUrl = commonutils.baseUrl() + "/qr/GetQrCodeZL?Id=" + this.id;
				forwardApi.GetWarehouseDetail(this.id).then(data => {
					th.warehouseInfo = data.Data;
				})
			}
		},
		mounted() {
			var th = this;
			commonutils.GetOpenId().then(openid => {
				th.openId = openid;
				if (openid != this.sourceOpenId) {
					this.shareShow = false;
				}
			})
			forwardApi.GetLikeListByWarehouseId(this.id).then(data => {
				console.log(data)
				this.likeList = data.Data;
			})
		},
		methods: {
			UserAssist() {
				uni.$u.route('/pages/loadingPage/loadingPage?id=' + this.id + "&bId=" + this.businessId +
					"&sourceOpenId=" +
					this.openId)
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
		margin-top: -350rpx;
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
		width: 94%;
		background: linear-gradient(90deg, #FF8A48 0%, #FF4057 100%);
		border-radius: 43rpx;
		font-weight: 400;
		font-size: 32rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 50rpx;
		margin-left: 22rpx;
		margin-right: 22rpx;
	}
</style>