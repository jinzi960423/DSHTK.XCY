<template>
	<view class="view-bg" style="background-image: url('https://www.sfj365.com/dshtk/images/zphx_bg.jpg')">

		<view class="content-bg" style="background-image: url('https://www.sfj365.com/dshtk/images/zphx_whitebg.png');">

			<view class="row-c-c">
				<net-image height="60rpx" width="60rpx" :imageUrl="PrizeInfo.ImgUrl"></net-image>
				<text class="fs28 m-l-10 fw-400 color-1d1d1d">{{PrizeInfo.Name}}</text>
			</view>
			<view class="column-c-c" style="margin: 100rpx; 0">
				<net-image width="400rpx" height="400rpx" :imageUrl="QrCodeUrl"></net-image>
				<text class="fs28 m-l-10 fw-400 color-1d1d1d m-t-40">券号 {{NumberStr}}</text>
			</view>
			<text class="fs28 fw-bold color-1d1d1d">核销说明</text>
			<text class="fs28 fw-400 color-1d1d1d m-t-20">1.门店提供的奖品必须按照要求给客户核销兑现，如果不兑现，投诉电话18121402800；</text>
			<text class="fs28 fw-400 color-1d1d1d m-t-10">2.本公司仅提供软件服务，客户和商家在使用过程中产生的问题，本公司不承担任何责任。</text>
		</view>

		<view class="m-t-40 p-b-30">
			<bottom-support-info subTitleColor="white" titleColor="white"></bottom-support-info>
		</view>

	</view>
</template>

<script>
	import redemptionApi from './redemption.js'
	import commonutils from '../../utils/common.js'
	import appStorage from '../../utils/appStorage.js'
	export default {
		data() {
			return {
				QrCodeUrl: "",
				PrizeId: "",
				BusinessId: "",
				OpenId: "",
				NumberStr: "",
				PrizeInfo: {},
			};
		},
		onLoad(options) {
			this.PrizeId = options.PrizeId;
		},
		mounted() {
			this.BusinessId = appStorage.getStorage("businessId");
			commonutils.GetOpenId().then(openid => {
				this.OpenId = openid;
				redemptionApi.GetUserPrizeDetail(this.OpenId, this.BusinessId, this.PrizeId).then(data => {
					console.log(data.Data.Number)
					this.NumberStr = data.Data.Number
					this.QrCodeUrl = commonutils.baseUrl() + "/Qr/Code?input=" + this.NumberStr;
				})
			})
			redemptionApi.GetPrizeEntity(this.PrizeId).then(data => {
				console.log(data)
				this.PrizeInfo = data.Data;
			})

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

	.content-bg {
		background: #FFFFFF;
		box-shadow: 0rpx 0rpx 11rpx 0rpx rgba(255, 69, 85, 0.38);
		border-radius: 20rpx;
		margin: 22rpx;
		padding: 40rpx;
		display: flex;
		flex-direction: column;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>