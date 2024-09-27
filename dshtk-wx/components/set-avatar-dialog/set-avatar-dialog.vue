<template>
    <view>

        <u-popup :show="show" mode="center" round="20rpx" @close="close" :safe-area-inset-bottom="false" closeable
            :closeOnClickOverlay="false">

            <view class="avatar-view">

                <text class="fs30 color-1d1d1d">完善信息</text>

                <button open-type="chooseAvatar" @chooseavatar="chooseavatar" class="avatar" style="margin-top: 40rpx;">
                    <u-image :src="headImg" width="160rpx" height="160rpx" shape="circle"></u-image>
                </button>

                <view style="border-radius: 8rpx;margin-top: 40rpx;width: 100%;" class="border-all H80 ">
                    <input v-model="nickName" placeholder="请输入昵称" type="nickname"
                        style="text-align: center; font-size: 32rpx;height: 100%;" @change="blurInput" />
                </view>

                <button class="color-white commit" style="width: 100%;margin-top: 100rpx;" @click="goSave">立即提交</button>

            </view>

        </u-popup>

    </view>
</template>

<script>
	import commonutils from '../../utils/common.js'
	import appStorage from '../../utils/appStorage.js'
    export default {
        name: "set-avatar-dialog",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                headImg: '',
                nickName: '',
				openid:''
            };
        },
		mounted() {
			var th = this;
			console.log("页面加载了")
			 wx.login({
			   success(res) {
			     console.log(res)
			     if (res.code) {
			       //发起网络请求
			       wx.request({
			         url: commonutils.baseUrl() + 'api/WeChatProgram/GetOpenId',
			         data: {
			           code: res.code
			         },
			         success: function (res) {
				      console.log(res)
					  appStorage.setStorage("openid",res.data.Data)
					  th.openid=res.data.Data;
			           console.log(res.data.Data);
			           //刷新当前页面 
			           //e.onLoad();
			
			         },
			         fail: function () {
			           return '';
			         }
			       })
			     } else {
			       console.log('登录失败！' + res.errMsg)
			     }
			   }
			 })
		},
        methods: {
            close() {
                this.$emit('close')
               // console.log('dddd')
            },
            blurInput(obj) {

                this.nickName = obj.detail.value
            },
            goSave() {
				const host = commonutils.baseUrl();
                console.log(host);
				if(this.headImg=="")
				{
					uni.showToast({
									title: "请授权您的头像",
									icon:'error',
									duration:850
								});

				}else if(this.nickName=="")
				{
					uni.showToast({
									title: "请输入您的昵称",
									icon:'error',
									duration:850
								});

				}else
				{
					 //this.close()
					
				}
				
               

            },
            chooseavatar(obj) {

                this.headImg = obj.detail.avatarUrl
            },

        },
    }
</script>

<style lang="scss" scoped>
    .avatar-view {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 90vw;
        padding: 40rpx;
        background-color: white;
        border-radius: 20rpx;
    }

    .avatar::after {
        border: none;
    }

    .avatar {
        background-color: transparent;
    }

    .commit {
        background: linear-gradient(90deg, #FF8A48 0%, #FF4057 100%);
        border-radius: 43rpx;
    }
</style>