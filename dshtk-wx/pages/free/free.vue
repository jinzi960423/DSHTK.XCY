 <template>

 	<view class="column">

 		<view style="position: relative;">
 			<net-image width="750rpx" height="421rpx" :imageUrl="BusinessActivity" mode="aspectFill"></net-image>
 			<view class="shopName">
 				<text>{{BnsinessName || '店家名称'}}</text>
 			</view>
 		</view>

 		<view class="column" style="position: relative;">

 			<image src="https://www.sfj365.com/dshtk/images/fl_bg.png" mode="widthFix" style="width: 100%;"></image>

 			<view class="column" style="position: absolute;left: 0;right: 0;bottom: 0;top: 0;">

 				<view class="row m-l-40 m-r-40 p-lr-20 p-tb-20"
 					style="background-color: #F7BA37;margin-top: 60rpx;border-radius: 20rpx;">
 					<image src="https://www.sfj365.com/dshtk/images/fl_01.png" style="width: 60rpx;height: 60rpx;"
 						mode="aspectFit">
 					</image>
 					<view class="m-l-10 color-333 fw-400 flex1" style="font-size: 42rpx;">
 						{{WelfareDescriptionOne}}
 						<!-- <span class="fw-bold" style="color: black;">满百人</span>发现金红包，<span class="fw-bold"
                             style="color: black;">运气最佳</span>还有独享大礼！ -->
 					</view>
 				</view>

 				<view class="row m-l-40 m-r-40 p-lr-20 p-tb-20 m-t-20"
 					style="background-color: #F7BA37;border-radius: 20rpx;">
 					<image src="https://www.sfj365.com/dshtk/images/fl_02.png" style="width: 60rpx;height: 60rpx;"
 						mode="aspectFit">
 					</image>
 					<view class="m-l-10 color-333 fw-400 flex1" style="font-size: 42rpx;">
 						{{WelfareDescriptionTwo}}
 						<!-- 群内长期<span class="fw-bold" style="color: black;">分享门店优惠活动！</span> -->
 					</view>
 				</view>

 				<view class="row-c-c" style="margin-top: 140rpx;justify-content: center;position: relative;">
 					<view class="row-c-c p-lr-20 p-tb-20 color-bg-white">
 						<net-image width="338rpx" height="338rpx" :imageUrl="BusinessWeChat"></net-image>
 					</view>
 					<image src="https://www.sfj365.com/dshtk/images/fl_03.png"
 						style="width: 64rpx;height: 241rpx;position: absolute;top: 0;right: 40rpx;" mode="aspectFit">
 					</image>
 				</view>

 				<view class="row-c-c m-l-40 m-r-40 color-white fs40 p-t-10 p-b-10"
 					style="background-color: black;margin-top: 80rpx;">
 					添加店主微信 方便核销奖品
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
 				BusinessWeChat: "",
 				BnsinessName: "",
 				BusinessActivity: "",
 				WelfareDescriptionOne: "",
 				WelfareDescriptionTwo: "",
 			};
 		},
 		mounted() {
 			commonutils.GetOpenId().then(openId => {
 				this.openId = openId;
 			})
 			var businessId = appStorage.getStorage("businessId");
 			commonutils.GetBusinessInfoById(businessId).then(businessInfo => {
 				console.log(businessInfo)
 				this.BusinessWeChat = businessInfo.Data.BusinessWeChat
 				this.BnsinessName = businessInfo.Data.BnsinessName
 				this.BusinessActivity = businessInfo.Data.BusinessActivity
				this.WelfareDescriptionOne =businessInfo.Data.WelfareDescriptionOne
				this.WelfareDescriptionTwo =businessInfo.Data.WelfareDescriptionTwo
 			});
 		},
 	}
 </script>

 <style>
 	page {
 		background-color: white;
 	}
 </style>

 <style lang="scss" scoped>
 	.shopName {

 		text {
 			background: #F7BA37;
 			border-radius: 37rpx;
 			font-family: Alibaba PuHuiTi 3.0;
 			font-weight: normal;
 			font-size: 40rpx;
 			color: black;
 			height: 74rpx;
 			padding: 0 20rpx;
 			line-height: 74rpx;
 			position: absolute;
 			left: 45rpx;
 			top: 37rpx;
 		}

 		display: flex;
 		align-items: center;
 		justify-content: flex-end;
 	}
 </style>