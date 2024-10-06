<template>

	<view style="background-color: #fff;margin-top: -15px;">
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">奖品名称<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入奖品名称" v-model="PrizeInfo.Name" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">奖品说明<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入奖品说明" v-model="PrizeInfo.Remark" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">转盘抽奖<text style="color: red;">*</text></text>
				</view>
				<view>
					<switch :checked="PrizeInfo.Turntable=='Y'?'checked':''" @change="switchChange"
						style="color: #2979ff;" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">库存总数<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" type="number" placeholder="请输入库存总数" v-model="PrizeInfo.Total" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">集赞数量<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" type="number" placeholder="请输入集赞数量" v-model="PrizeInfo.PrizeLike" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">排序<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" type="number" placeholder="请输入排序" v-model="PrizeInfo.Sort" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">奖品图片<text style="color: red;">*</text></text>
				</view>
				<view class="example-body">
					<uni-file-picker limit="1" @select="imgUrlSelect" @success="success" @progress="progress"
						:auto-upload="true" fileMediatype="image" mode="grid" v-model="ImgUrl"
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
				Id: "",
				BusinessId:"",
				ImgUrl: [],
				SwitchState: true,
				PrizeInfo: {
					ImgUrl: "",
					IssuedCount: 0,
					Name: "",
					PrizeDescription: "",
					PrizeLike: "",
					Remark: "",
					Sort: "",
					State: "Y",
					Turntable: "",
					WinningRate: 0,
					BusinessId:"",
					Total:""
				}
			}
		},
		onLoad(options) {
			var Id = options.Id;
			
			if (Id == undefined) {
				Id = "";
			}
			this.Id = Id
			var BusinessId = options.BusinessId;
			if (BusinessId == undefined) {
				Id = "";
			}
			this.BusinessId = BusinessId
		},
		mounted() {
			var adminId = appStorage.getStorage("adminId")
			this.PrizeInfo.BusinessId=this.BusinessId;
			if (adminId == "" || adminId == undefined) {
				uni.$u.route('/admin/login/login')
			}
			var th = this;
			if (this.Id != "") {
				businessApi.GetPrizeEntity(this.Id).then(data => {
					th.PrizeInfo = data.Data;
					console.log(th.PrizeInfo)

					th.ImgUrl = [];
					if (th.PrizeInfo.ImgUrl != "") {
						th.ImgUrl.push({
							name: "",
							path: th.PrizeInfo.ImgUrl,
							url: th.PrizeInfo.ImgUrl
						})
					}
				})
			}
		},
		methods: {
			businessSave: function() {
				var th = this;
				if (this.PrizeInfo.Name == "") {
					commonutils.showToast("请输入奖品名称", "error")
				} else if (this.PrizeInfo.Remark == "") {
					commonutils.showToast("请选择奖品说明", "error")
				} else if (this.PrizeInfo.Total == "") {
					commonutils.showToast("请选输入库存总数", "error")
				} else if (this.PrizeInfo.PrizeLike == "") {
					commonutils.showToast("请选输入集赞数量", "error")
				} else if (this.PrizeInfo.Sort == "") {
					commonutils.showToast("请选输入排序", "error")
				} else if (this.ImgUrl.length == 0) {
					commonutils.showToast("请上传奖品图片", "error")
				} else {
					uni.showLoading({
						title: "更新中..."
					});
					businessApi.PrizeSave(this.PrizeInfo).then(resData => {
						uni.hideLoading();
						console.log(resData)
						if (resData.Success) {
							//th.PrizeInfo = resData.Data;
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
			switchChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.SwitchState = e.detail.value
				if (e.detail.value) {
					this.PrizeInfo.Turntable = 'Y'
				} else {
					this.PrizeInfo.Turntable = 'N'
				}
			},
			imgUrlSelect(e) {
				var th = this;
				const tempFilePaths = e.tempFilePaths;
				businessApi.selectImgUploadFile(tempFilePaths).then(data => {
					var resData = JSON.parse(data);
					th.ImgUrl = [];
					th.PrizeInfo.ImgUrl = resData.filePath
					th.ImgUrl.push({
						name: "",
						path: resData.filePath,
						url: resData.filePath
					})
					console.log(data)
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