<template>
	<view class="container">
		<uni-section title="功能一(白吃白喝)" type="line" padding>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">功能名称<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入商户名称" v-model="ConfigOne.FunctionName" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">功能说明<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入商户地址" v-model="ConfigOne.FunctionDescription" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">背景图片<text style="color: red;">*</text></text>
				</view>
				<view class="example-body">
					<uni-file-picker limit="1" @select="configOneImgSelect" @success="success" @progress="progress"
						:auto-upload="true" fileMediatype="image" mode="grid" v-model="ConfigOneImg"
						:source-type="sourceType"></uni-file-picker>
				</view>
			</view>
		</uni-section>
		<uni-section title="功能二(霸王餐)" type="line" padding>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">功能名称<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入商户名称" v-model="ConfigTwo.FunctionName" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">功能说明<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入商户地址" v-model="ConfigTwo.FunctionDescription" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">背景图片<text style="color: red;">*</text></text>
				</view>
				<view class="example-body">
					<uni-file-picker limit="1" @select="configTwoImgSelect" @success="success" @progress="progress"
						:auto-upload="true" fileMediatype="image" mode="grid" v-model="ConfigTwoImg"
						:source-type="sourceType"></uni-file-picker>
				</view>
			</view>
		</uni-section>
		<uni-section title="功能三(小仓库)" type="line" padding>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">功能名称<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入商户名称" v-model="ConfigThree.FunctionName" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">功能说明<text style="color: red;">*</text></text>
				</view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入商户地址" v-model="ConfigThree.FunctionDescription" />
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">背景图片<text style="color: red;">*</text></text>
				</view>
				<view class="example-body">
					<uni-file-picker limit="1" @select="configThreeImgSelect" @success="success" @progress="progress"
						:auto-upload="true" fileMediatype="image" mode="grid" v-model="ConfigThreeImg"
						:source-type="sourceType"></uni-file-picker>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<button @click="configSave" class="submit-button">确认提交</button>
			</view>
		</uni-section>

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
				ConfigOne: {},
				ConfigTwo: {},
				ConfigThree: {},
				ConfigOneImg: [],
				ConfigTwoImg: [],
				ConfigThreeImg: [],
				ConfigList: [],
			}
		},
		onLoad(options) {
			var Id = options.Id; //"14209525-E343-4996-B71F-813AC8494C35"; //
			if (Id == undefined) {
				Id = "";
			}
			this.Id = Id
		},
		mounted() {
			var th = this;
			businessApi.GetBusinessConfigListById(this.Id).then(data => {
				th.ConfigOne = data.data[0];
				th.ConfigOneImg = []
				th.ConfigOneImg.push({
					name: "",
					path: data.data[0].BackgroundImage,
					url: data.data[0].BackgroundImage
				})
				th.ConfigTwo = data.data[1];
				th.ConfigTwoImg = []
				th.ConfigTwoImg.push({
					name: "",
					path: data.data[1].BackgroundImage,
					url: data.data[1].BackgroundImage
				})
				th.ConfigThree = data.data[2];
				th.ConfigThreeImg = []
				th.ConfigThreeImg.push({
					name: "",
					path: data.data[2].BackgroundImage,
					url: data.data[2].BackgroundImage
				})
			})
		},
		methods: {
			configOneImgSelect(e) {
				var th = this;
				const tempFilePaths = e.tempFilePaths;
				businessApi.selectImgUploadFile(tempFilePaths).then(data => {
					var resData = JSON.parse(data);
					th.ConfigOne.BackgroundImage = resData.filePath
					th.ConfigOneImg = []
					th.ConfigOneImg.push({
						name: "",
						path: resData.filePath,
						url: resData.filePath
					})
				});
			},
			configTwoImgSelect(e) {
				var th = this;
				const tempFilePaths = e.tempFilePaths;
				businessApi.selectImgUploadFile(tempFilePaths).then(data => {
					var resData = JSON.parse(data);
					th.ConfigTwo.BackgroundImage = resData.filePath
					th.ConfigTwoImg = []
					th.ConfigTwoImg.push({
						name: "",
						path: resData.filePath,
						url: resData.filePath
					})
				});
			},
			configThreeImgSelect(e) {
				var th = this;
				const tempFilePaths = e.tempFilePaths;
				businessApi.selectImgUploadFile(tempFilePaths).then(data => {
					var resData = JSON.parse(data);
					th.ConfigThree.BackgroundImage = resData.filePath
					th.ConfigThreeImg = []
					th.ConfigThreeImg.push({
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
			},
			configSave() {
				var th = this;
				if (th.ConfigOne.FunctionName == "" || th.ConfigTwo.FunctionName == "" || th.ConfigThree.FunctionName ==
					"") {
					commonutils.showToast("功能名称不能为空", "error")
				} else if (th.ConfigOne.FunctionDescription == "" || th.ConfigTwo.FunctionDescription == "" || th
					.ConfigThree.FunctionDescription == "") {
					commonutils.showToast("功能说明不能为空", "error")
				} else if (th.ConfigOneImg.length == 0 || th.ConfigTwoImg.length == 0 || th.ConfigThreeImg.length == 0) {
					commonutils.showToast("背景图片不能为空，请上传", "error")
				} else {
					th.ConfigList = [];
					th.ConfigList.push(th.ConfigOne)
					th.ConfigList.push(th.ConfigTwo)
					th.ConfigList.push(th.ConfigThree)
					console.log(th.ConfigList)
					uni.showLoading({
						title: "更新中..."
					});
					businessApi.ConfigUpdateList(th.ConfigList).then(data => {
						uni.hideLoading();
						if (data.Success) {
							
							commonutils.showToast("更新成功", "success")
							setTimeout(function(){
								uni.navigateBack();
							},1500)
							
						} else {
							commonutils.showToast("更新失败，请重试", "error")
						}
						console.log(data)
					})
				}
			}
		}
	}
</script>

<style>
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
</style>