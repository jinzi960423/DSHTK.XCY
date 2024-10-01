 <template>

 	<view style="position: relative;">

 		<net-image width="750rpx" height="640rpx" :imageUrl="BusinessActivity"></net-image>

 		<view style="position: absolute;left: 0;right: 0;bottom: 0;top: 0;height: 100vh;">

 			<image src="https://www.sfj365.com/dshtk/images/bp_bg.png" mode="widthFix" style="width: 100%;"></image>

 			<view style="position: absolute;left: 0;right: 0;bottom: 0;top: 0;" class="column">

 				<view class="shopName">
 					<text>{{BnsinessName}}</text>
 				</view>

 				<image src="https://www.sfj365.com/dshtk/images/bp_01.png" mode="widthFix"
 					style="width: 100%;margin-top: 540rpx;"></image>

 				<image src="https://www.sfj365.com/dshtk/images/bp_02.png" mode="widthFix" style="width: 100%;">
 				</image>

 				<view class="row-c-c m-t-20">
 					<net-image width="180rpx" height="180rpx" :imageUrl="BusinessWeChat"></net-image>
 					<view class="column m-l-20 fs32 fw-500 color-1d1d1d">
 						<text>扫码添加店主微信</text>
 						<text>专属福利等你参与</text>
 					</view>
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
 				BusinessActivity: ""
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
            background: #FD5703;
            border-radius: 13rpx;
            font-family: Alibaba PuHuiTi 3.0;
            font-weight: normal;
            font-size: 40rpx;
            color: #FFFFFF;
            padding: 5rpx 10rpx;
            margin-top: 70rpx;
            margin-right: 20rpx;
        }

        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
</style>