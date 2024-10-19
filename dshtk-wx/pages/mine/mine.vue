<template>
	<view class="column">
		<image src="https://www.sfj365.com/dshtk/images/personal_bg.png" mode="widthFix" style="width: 100%;"></image>
		<view class="content-bg p-lr-30 column-c-c">
			<net-image style="width: 92rpx;height: 92rpx;" imageUrl="https://www.sfj365.com/dshtk/images/user.png"
				radius="46rpx"></net-image>
			<text class="m-t-30 color-1d1d1d fs28 font-family fw-400">{{userInfo.NickName}}</text>
		</view>
		<view class="row-c m-t-30">
			<image src="https://www.sfj365.com/dshtk/images/personal_title.png" style="width: 40rpx;height: 40rpx;"
				class="m-lr-20"></image>
			<text class="fs28 color-1d1d1d fw-400 font-family">我的仓库</text>
		</view>
		<view class="column m-t-20 m-lr-20">
			<view v-for="(item,index) in dataList" :key="index" class="color-bg-white b-r-8 row-c H100 p-lr-20"
				style="margin-bottom: 2rpx;" @click="$u.route('/pages/redemption/redemption?PrizeId='+item.PrizeId)">
				<net-image width="60rpx" height="60rpx" radius="30rpx" :imageUrl="item.ImgUrl"></net-image>
				<text class="fs28 m-lr-20 fw-400 color-1d1d1d flex1">{{item.Name}}</text>
				<text class="fs28 fw-400 color-1d1d1d m-r-20">{{item.Count}}</text>
				<u-icon name="arrow-right" color="#999" size="24rpx"></u-icon>
			</view>
		</view>
		<view class="column-c-c m-t-30">
			<net-image height="385rpx" width="385rpx" :imageUrl="qrCodeImg"></net-image>
			<view class="m-t-20 fs28 color-1d1d1d">添加店主微信，快速领奖</view>
		</view>

		<view class="bottom-view row-c-c">
			<safe-bottom-view>
				<bottom-support-info></bottom-support-info>
			</safe-bottom-view>
		</view>
	</view>
</template>

<script>
	import mineApi from './mine.js';
	import commonutils from '../../utils/common.js'
	import appStorage from '../../utils/appStorage.js'
	export default {
		data() {
			return {
				userInfo: {},
				dataList: [],
				qrCodeImg: ""
			};
		},
		mounted() {
			var businessId = appStorage.getStorage("businessId");
			commonutils.GetBusinessInfoById(businessId).then(businessInfo => {
				this.qrCodeImg = businessInfo.Data.BusinessWeChat
			})
			commonutils.GetOpenId().then(openid => {
				mineApi.GetPrizeListByOpenId(businessId, openid).then(dataList => {
					this.dataList = dataList.Data;
				})
			})
			commonutils.GetUserInfo().then(userInfo => {
				this.userInfo = userInfo.Data;
			})
		}
	}
</script>

<style lang="scss" scoped>
	.content-bg {
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 11rpx 0rpx rgba(255, 69, 85, 0.38);
		border-radius: 20rpx;
		margin-left: 22rpx;
		margin-right: 22rpx;
		margin-top: -250rpx;
		padding-top: 60rpx;
		padding-bottom: 60rpx;
	}
</style>