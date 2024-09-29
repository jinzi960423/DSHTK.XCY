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
	import set_avatar from './set_avatar.js'
	import {
		error
	} from '../../uni_modules/uview-plus/index.js';
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
				openId: '',
			};
		},
		mounted() {
			commonutils.GetOpenId().then(id => {
				console.log("获取到的openid" + id)
				this.openId = id;
			}).catch(error => {
				console.error(error);
			});
		},
		methods: {
			close() {
				//this.show.default=false;
				this.$emit('close')
			},
			goSave() {
				var th = this;
				const host = commonutils.baseUrl();
				console.log(host);
				console.log(this.openId);
				if (this.headImg == "") {
					commonutils.showToast("请授权您的头像", "error");
				} else if (this.nickName == "") {
					commonutils.showToast("请输入您的昵称", "error");
				} else {
					set_avatar.saveUserInfo(this.openId, this.headImg, this.nickName).then(data => {
						console.log(data)
						console.log(data.Success)
						if (data.Success) {
							commonutils.showToast(data.Message, "success");
							th.close();
						} else {
							commonutils.showToast(data.Message, "error");
						}
					}).catch(error => {
						console.log(error)
						commonutils.showToast(error, "error");
					})
					//

				}
			},
			//获取用户昵称
			blurInput(obj) {
				this.nickName = obj.detail.value
			},
			//获取用户头像
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