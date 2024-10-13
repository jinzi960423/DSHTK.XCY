<template>
	<view class="container"> 
		<uni-section :title="businessName" type="line" padding>
			<uni-grid :column="3" :show-border="false" :square="false">
				<uni-grid-item>
					<view class="grid-item-box" @click="scanCode" style="background-color: #fff;">
						<uni-icons type="scan" :size="30" color="#777" />
						<text class="text">奖品核销</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @click="writeList" style="background-color: #fff;">
						<uni-icons type="cart-filled" :size="30" color="#777" />
						<text class="text">核销记录</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @click="configFunction" style="background-color: #fff;">
						<uni-icons type="shop" :size="30" color="#777" />
						<text class="text">首页设置</text>
					</view>
				</uni-grid-item>
			</uni-grid>
			<uni-grid :column="3" :show-border="false" :square="false">
				<uni-grid-item>
					<view class="grid-item-box" @click="configBusiness" style="background-color: #fff;">
						<uni-icons type="compose" :size="30" color="#777" />
						<text class="text">基本信息</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @click="prizeList" style="background-color: #fff;">
						<uni-icons type="gift-filled" :size="30" color="#777" />
						<text class="text">奖品管理</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @click="qrCode" style="background-color: #fff;">
						<uni-icons type="image-filled" :size="30" color="#777" />
						<text class="text">物料二维码</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>

		<uni-section v-if="isAdmin" title="渠道商户推广" type="line" padding>
			<uni-grid :column="3" :show-border="false" :square="false">
				<uni-grid-item>
					<view class="grid-item-box" @click="businessList" style="background-color: #fff;">
						<uni-icons type="list" :size="30" color="#777" />
						<text class="text">商户列表</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="系统管理" type="line" padding>
			<uni-grid :column="3" :show-border="false" :square="false">
				<uni-grid-item>
					<view class="grid-item-box" @click="updatePwd" style="background-color: #fff;">
						<uni-icons type="refresh" :size="30" color="#777" />
						<text class="text">修改密码</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @click="loginOut" style="background-color: #fff;">
						<uni-icons type="paperplane-filled" :size="30" color="#777" />
						<text class="text">退出登录</text>
					</view>
				</uni-grid-item>

			</uni-grid>
		</uni-section>
	</view>
</template>
<script>
	import homeApi from './home.js'
	import appStorage from '../../utils/appStorage.js'
	import commonutils from '../../utils/common.js'
	export default {
		components: {},
		data() {
			return {
				adminId: "",
				isAdmin: false,
				businessName: "",
				dynamicList: [],
			}
		},
		onLoad() {
			var adminId = appStorage.getStorage("adminId")
			var Admin = appStorage.getStorage("isAdmin")
			var businessName = appStorage.getStorage("businessName")
			var th = this;
			commonutils.GetBusinessInfoById(adminId).then(BusinessInfo => {
				this.isAdmin = BusinessInfo.Data.IsAdmin == "Y";
			})

			this.adminId = adminId;
			this.businessName = businessName;
			if (adminId == "" || adminId == undefined) {
				uni.$u.route('/admin/login/login')
			}
		},
		methods: {
			qrCode: function() {
				uni.$u.route('/admin/business/qrCode?Id=' + this.adminId)
			},
			configBusiness: function() {
				uni.$u.route('/admin/business/edit?Id=' + this.adminId)
			},
			prizeList: function() {
				uni.$u.route('/admin/business/prizeList?Id=' + this.adminId)
			},
			configFunction: function() {
				uni.$u.route('/admin/business/homeConfig?Id=' + this.adminId)
			},
			businessList: function() {
				uni.$u.route('/admin/business/list')
			},

			updatePwd: function() {
				uni.$u.route('/admin/login/updatePwd')
			},
			writeList: function() {
				uni.$u.route('/admin/Write/WriteList')
			},
			loginOut: function() {
				appStorage.setStorage("adminId", "")
				uni.$u.route('/admin/login/login')
			},
			// 调用扫一扫功能  
			scanCode: function() {
				var that = this;
				wx.scanCode({
					onlyFromCamera: false, // 是否只从相机扫码，不允许从相册选择图片  
					scanType: ['qrCode', 'barCode'], // 可以指定扫码的类型  
					success: function(res) {
						var result = res.result // 将扫码结果设置到页面的数据中  
						uni.showLoading({
							title: "核销中.."
						});
						homeApi.WriteOff(result, that.adminId).then(data => {
							uni.hideLoading();
							if (data.Success) {
								uni.showModal({
									title: '温馨提示',
									content: "核销成功,券号:" + result,
									showCancel: false,
									success: function(res) {
										if (res.confirm) {

										}
									}
								});
								commonutils.showToast("核销成功，券号:" + result, 'success')
							} else {
								uni.showModal({
									title: '温馨提示',
									content: "核销失败，请重试，券号:" + result,
									showCancel: false,
									success: function(res) {
										if (res.confirm) {

										}
									}
								});
							}
						})


						//commonutils.showToast(result, "success")

					},
					fail: function(err) {
						//commonutils.showToast("取消核销", "none")
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.image {
		width: 25px;
		height: 25px;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}


	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;

		display: flex;

		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-item-box-row {
		flex: 1;
		// position: relative;

		display: flex;

		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}

	.swiper {
		height: 420px;
	}
</style>