<template>
	<view style="background-color: #fff;margin-top: -15px;">
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">商户所在城市<text style="color: red;">*</text></text>
				</view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-db">
							<picker @change="bindPickerChange" :value="index" style="width: 100%;"
								:range="CityLimitsList" range-key="CityName">
								<view class="uni-input">{{CityLimitsList[index].CityName}}</view>
							</picker>
						</view>
					</view>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">商户名称<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入商户名称" v-model="businessInfo.BnsinessName" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">商户地址<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入商户地址" v-model="businessInfo.Address" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">商户账号<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" type="tel" :disabled="isAdmin?'':'disabled'" placeholder="请输入商户账号(建议使用手机号)"
						v-model="businessInfo.Account" />
				</view>
			</view>
			<view class="uni-form-item uni-column" v-if="isAdmin">
				<view class="title"><text class="uni-form-item__title">商户密码<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入商户密码" v-model="businessInfo.Password" />
				</view>
			</view>
			<view class="uni-form-item uni-column" style="display: none;">
				<view class="title"><text class="uni-form-item__title">当前经度<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入当前经纬度" disabled="disabled"
						v-model="businessInfo.Longitude" />
				</view>
			</view>
			<view class="uni-form-item uni-column" style="display: none;">
				<view class="title"><text class="uni-form-item__title">当前纬度<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入当前经纬度" disabled="disabled"
						v-model="businessInfo.Latitude" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">店主微信<text style="color: red;">*</text></text>
				</view>
				<view class="example-body">
					<uni-file-picker limit="1" @select="businessWeChatSelect" @success="success" @progress="progress"
						:auto-upload="true" fileMediatype="image" mode="grid" v-model="businessWeChat"
						delete="businessWeChatDelete" :source-type="sourceType"></uni-file-picker>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">活动图片<text style="color: red;">*</text></text>
				</view>
				<view class="example-body">
					<uni-file-picker limit="1" @select="businessActivitySelect" @success="success" @progress="progress"
						:auto-upload="true" fileMediatype="image" mode="grid" v-model="businessActivity"
						:source-type="sourceType"></uni-file-picker>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<button @click="businessSave" class="submit-button">确认提交</button>
			</view>
		</view>
	</view>

</template>
<script>
	import businessApi from './business.js'
	import appStorage from '../../utils/appStorage.js'
	import commonutils from '../../utils/common.js'
	export default {
		data() {
			return {
				index: 0,
				isAdmin: false,
				CityLimitsList: [{
					"Id": "",
					"CityName": "请选择"
				}],
				businessWeChat: [],
				businessActivity: [],
				businessInfo: {
					Id: "",
					Account: "",
					Password: "",
					Address: "",
					Latitude: "",
					Longitude: "",
					BnsinessName: "",
					BusinessWeChat: "",
					BusinessActivity: "",
					CityId: "",
					State: "Y",
					CreateUid: "",
					IsAdmin: "N",
				}
			}
		},
		watch: {
			'businessWeChat': {
				handler(newValue, oldValue) {
					if (newValue == "") {
						this.businessInfo.BusinessActivity = ""
						console.log(`property1 changed from ${oldValue} to ${newValue}`);
					}
				},
				deep: true
			},
			'businessActivity': {
				handler(newValue, oldValue) {
					if (newValue == "") {
						this.businessInfo.businessActivity = ""
						console.log(`property1 changed from ${oldValue} to ${newValue}`);
					}
				},
				deep: true
			}
		},
		onLoad(options) {
			var Id = options.Id;
			if (Id == undefined) {
				Id = "";
			}
			this.businessInfo.Id = Id
		},
		mounted() {

			var adminId = appStorage.getStorage("adminId")
			var Admin = appStorage.getStorage("isAdmin")
			this.isAdmin = Admin == "Y";
			this.businessInfo.CreateUid = adminId;
			if (adminId == "" || adminId == undefined) {
				uni.$u.route('/admin/login/login')
			}

			var th = this;
			businessApi.GetCityLimitsList().then(data => {
				th.CityLimitsList = th.CityLimitsList.concat(data.Data);
				if (th.businessInfo.Id == "" || th.businessInfo.Id == undefined) {
					uni.getLocation({
						type: 'wgs84',
						success: function(res) {
							//commonutils.showToast('当前位置的经度：' + res.longitude, "success");
							console.log('当前位置的经度longitude：' + res.longitude);
							console.log('当前位置的纬度latitude：' + res.latitude);
							th.businessInfo.Latitude = res.latitude;
							th.businessInfo.Longitude = res.longitude;
						}
					})
				} else {
					commonutils.GetBusinessInfoById(th.businessInfo.Id).then(data => {
						th.businessInfo = data.Data;
						for (var i = 0; i < th.CityLimitsList.length; i++) {
							if (th.CityLimitsList[i].Id == th.businessInfo.CityId) {
								th.index = i;
							}
						}
						th.businessWeChat = [];
						if (th.businessInfo.BusinessWeChat != "") {
							th.businessWeChat.push({
								name: "",
								path: th.businessInfo.BusinessWeChat,
								url: th.businessInfo.BusinessWeChat
							})
						}
						if (th.businessInfo.BusinessActivity != "") {
							th.businessActivity = [];
							th.businessActivity.push({
								name: "",
								path: th.businessInfo.BusinessActivity,
								url: th.businessInfo.BusinessActivity
							})
						}

					});
				}
			});
		},
		methods: {
			businessSave: function() {
				var th = this;
				if (this.businessInfo.BnsinessName == "") {
					commonutils.showToast("请输入商户名称", "error")
				} else if (this.businessInfo.CityId == "") {
					commonutils.showToast("请选择商户所在城市", "error")
				} else if (this.businessInfo.Address == "") {
					commonutils.showToast("请选输入商户地址", "error")
				} else if (this.businessInfo.Account == "") {
					commonutils.showToast("请选输入商户账号", "error")
				} else if (this.businessInfo.Password == "") {
					commonutils.showToast("请选输入商户密码", "error")
				} else if (this.businessInfo.Longitude == "") {
					commonutils.showToast("当前经纬度获取失败", "error")
				} else if (this.businessInfo.BusinessWeChat == "") {
					commonutils.showToast("请上传店主微信二维码", "error")
				} else if (this.businessInfo.BusinessActivity == "") {
					commonutils.showToast("请上传活动图片", "error")
				} else {
					uni.showLoading({
						title: "更新中..."
					});
					businessApi.BusinessSave(this.businessInfo).then(resData => {
						uni.hideLoading();
						console.log(resData)
						if (resData.Success) {
							th.businessInfo = resData.Data;
							//uni.$u.route('/admin/business/list'); 
							commonutils.showToast("保存成功", "success")
							setTimeout(function() {
								uni.navigateBack();
							}, 1500)
						} else {
							commonutils.showToast("保存失败", "error")
						}

					})
				}
			},
			bindPickerChange: function(e) {
				//console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
				console.log(this.CityLimitsList[e.detail.value].Id)
				this.businessInfo.CityId = this.CityLimitsList[e.detail.value].Id;
			},
			businessWeChatSelect(e) {
				var th = this;
				const tempFilePaths = e.tempFilePaths;
				businessApi.selectImgUploadFile(tempFilePaths).then(data => {
					var resData = JSON.parse(data);
					th.businessWeChat = [];
					th.businessInfo.BusinessWeChat = resData.filePath
					th.businessWeChat.push({
						name: "",
						path: resData.filePath,
						url: resData.filePath
					})
					console.log(data)
				});
			},
			businessActivitySelect(e) {
				var th = this;
				const tempFilePaths = e.tempFilePaths;
				businessApi.selectImgUploadFile(tempFilePaths).then(data => {
					var resData = JSON.parse(data);
					th.businessInfo.BusinessActivity = resData.filePath
					th.businessActivity = [];
					th.businessActivity.push({
						name: "",
						path: resData.filePath,
						url: resData.filePath
					})
				});
			},
			progress(e) {
				console(e, "上传中")
			},
			success(e) {
				console.log('上传成功')
			}
		}
	}
</script>

<style scoped>
	.uni-input-wrapper {
		border: 1px solid #777;
		border-radius: 5px;
	}

	.submit-button {
		margin-top: 20px;
		width: 100%;
		background-color: #2979ff;
		color: #fff;
		border: none;
		border-radius: 4px;
	}

	.uni-list-cell-db {
		width: 100%;
		display: flex;
		padding: 8px 13px;
		flex-direction: row;
		flex-wrap: nowrap;
		background-color: #FFFFFF;
	}

	.nvue-page-root {
		background-color: #F8F8F8;
		padding-bottom: 20px;
	}

	.page-title {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 1rpx;
	}

	.uni-common-mt {
		padding: 15rpx;
	}

	.title {
		padding: 5px 13px;
	}

	.uni-form-item__title {
		font-size: 16px;
		line-height: 24px;
	}

	.uni-input-wrapper {
		padding: 8px 13px;
		flex-direction: row;
		flex-wrap: nowrap;
		background-color: #FFFFFF;
	}

	.uni-input {
		height: 28px;
		line-height: 28px;
		font-size: 15px;
		padding: 0px;
		flex: 1;
		background-color: #FFFFFF;
	}

	.uni-icon {
		font-family: uniicons;
		font-size: 24px;
		font-weight: normal;
		font-style: normal;
		width: 24px;
		height: 24px;
		line-height: 24px;
		color: #999999;
	}

	.uni-eye-active {
		color: #007AFF;
	}
</style>