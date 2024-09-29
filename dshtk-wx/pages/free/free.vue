<template>
	<view class="view-bg" style="background-image: url('https://www.sfj365.com/dshtk/images/bp_bg.png')">
		<view class="column" style="position: fixed;bottom: 0;padding-bottom: 60rpx;">
			<view style="width: 100vw;" class="column-c-c">
				<view class="bp_01" style="background-image: url('https://www.sfj365.com/dshtk/images/bp_01.png')">
				</view>
			</view>
			<view style="width: 100%;" class="column-c-c m-t-20">
				<view class="bp_02" style="background-image: url('https://www.sfj365.com/dshtk/images/bp_02.png')">
				</view>
			</view>
			<view class="row-c-c m-t-20">
				<net-image width="200rpx" height="200rpx" :imageUrl="BusinessWeChat"></net-image>
				<view class="column m-l-20 fs32 fw-500 color-1d1d1d">
					<text>扫码添加店主微信</text>
					<text>专属福利等你参与</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import commonutils from '../../utils/common.js'
	import appStorage from '../../utils/appStorage.js'
	export default {
		data() {
			return {
                BusinessWeChat:""
			};
		},mounted() {
			commonutils.GetOpenId().then(openId => {
				this.openId = openId; 
			})
			var businessId = appStorage.getStorage("businessId");
			commonutils.GetBusinessInfoById(businessId).then(businessInfo=>{ 
				console.log(businessInfo)
				this.BusinessWeChat=businessInfo.Data.BusinessWeChat
			}); 
		},
	}
</script>

<style lang="scss" scoped>
	.view-bg {
		background-size: cover;
		background-repeat: no-repeat;
		width: 100vw;
		height: 100vh;
		background-color: white;
	}

	.bp_01 {

		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		height: 200rpx;
		width: 640rpx;
	}

	.bp_02 {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center center;
		height: 190rpx;
		width: 640rpx;
	}
</style>