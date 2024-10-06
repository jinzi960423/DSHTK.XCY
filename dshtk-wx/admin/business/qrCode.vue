<template>
	<view class="column">
		<image src="https://www.sfj365.com/dshtk/images/personal_bg.png" mode="widthFix" style="width: 100%;">
		</image>

		<view class="content-bg p-tb-30 p-lr-30" style="padding-bottom: 100rpx;">
			<view class="column-c-c m-t-30">
				<net-image height="385rpx" width="385rpx" :imageUrl="imgUrl"></net-image>
				<view class="m-t-20 fs28 color-1d1d1d">扫码二维码，参加抽奖活动</view>
			</view>

		</view>

		<view class="m-t-40 p-b-30">
			<bottom-support-info></bottom-support-info>
		</view>

	</view>

</template>

<script>
	import appStorage from '../../utils/appStorage.js'
	import commonutils from '../../utils/common.js'
	export default {
		data() {
			return {
				imgUrl: ""
			}
		},
		onLoad() {

		},
		mounted() {
			var adminId = appStorage.getStorage("adminId")
			 
			if (adminId == "" || adminId == undefined) {
				uni.$u.route('/admin/login/login')
			}
			this.imgUrl = commonutils.baseUrl() + "/qr/GetQrCode?Id=" + adminId;
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.top-bg {
		height: 400rpx;
		background: linear-gradient(90deg, #FF8A48 0%, #FF4057 100%);
		border-radius: 0rpx 0rpx 133rpx 133rpx;
		display: flex;

		text {
			margin-top: 60rpx;
			font-weight: 400;
			font-size: 60rpx;
			color: #FFFFFF;
			width: 100%;
			text-align: center;
		}
	}

	.content-bg {
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 11rpx 0rpx rgba(255, 69, 85, 0.38);
		border-radius: 20rpx;
		margin-left: 22rpx;
		margin-right: 22rpx;
		margin-top: -200rpx;
	}
</style>