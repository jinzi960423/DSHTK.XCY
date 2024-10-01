<template>
    <view class="view-bg" style="background-image: url('https://www.sfj365.com/dshtk/images/bp_bg.png')">
        <view style="position: relative;">
            <net-image width="750rpx" height="640rpx" :imageUrl="BusinessActivity"></net-image>
            <text class="shopName row-c-c u-line-1">{{BnsinessName}}</text>
        </view>
        <view class="column" style="margin-top: 40rpx;">
            <view style="width: 100vw;" class="column-c-c">
                <view class="bp_01" style="background-image: url('https://www.sfj365.com/dshtk/images/bp_01.png')">
                </view>
            </view>
            <view style="width: 100%;" class="column-c-c m-t-20">
                <view class="bp_02" style="background-image: url('https://www.sfj365.com/dshtk/images/bp_02.png')">
                </view>
            </view>
            <view class="row-c-c m-t-40">
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
                BusinessWeChat:"",
				BnsinessName:"",
				BusinessActivity:""
			};
		},mounted() {
			commonutils.GetOpenId().then(openId => {
				this.openId = openId; 
			})
			var businessId = appStorage.getStorage("businessId");
			commonutils.GetBusinessInfoById(businessId).then(businessInfo=>{ 
				console.log(businessInfo)
				this.BusinessWeChat=businessInfo.Data.BusinessWeChat
				this.BnsinessName=businessInfo.Data.BnsinessName
				this.BusinessActivity=businessInfo.Data.BusinessActivity
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
	        padding-top: 65rpx;
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
	
	    .shopName {
	
	        background: #FD5703;
	        border-radius: 13rpx;
	        font-family: Alibaba PuHuiTi 3.0;
	        font-weight: normal;
	        font-size: 40rpx;
	        color: #FFFFFF;
	        position: absolute;
	        right: 20rpx;
	        top: 40rpx;
	        padding: 5rpx 10rpx;
	    }
</style>