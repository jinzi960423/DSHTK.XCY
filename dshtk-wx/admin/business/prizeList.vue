<template>
	<view>
		<uni-icons @click="addPrize" type="plus-filled" :size="60" class="icons" color="#2979ff" />
		<view class="uni-list">
			<block v-for="(value, index) in listData" :key="index">
				<view class="uni-list-cell"> <!-- hover-class="uni-list-cell-hover" -->
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.ImgUrl"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">
								<text>{{ value.Remark }}</text>
								<text>总 数 量:{{ value.Total }}</text>
								<text>发放数量:{{ value.IssuedCount }}</text>
							</view>
							<view class="uni-media-list-text-bottom">
								<text>是否抽奖: {{ value.State=='Y'?'是':'否' }}</text>
								<text>集赞数量: {{ value.PrizeLike }}</text>
							</view>
							<div style="height: 10rpx;"></div>
							<view class="uni-media-list-text-bottom">
								<view class="button-sp-area" style="width: 100%;">
									<button @click="del(value.Id)" style="    border: 1px solid #fb0000;
									color: #ff0000;" class="mini-btn" type="default" plain="true" size="mini">删除</button>
									<button @click="edit(value.Id)" class="mini-btn" type="default" plain="true"
										size="mini">编辑</button>

								</view>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<uni-load-more :status="status" :icon-size="16" :content-text="contentText" />

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
				status: 'more',
				listData: [],
				Page: 1,
				Limit: 30,
				reload: false,
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多数据了~~'
				}
			};
		},
		onLoad(options) {
			var Id = options.Id; //"14209525-E343-4996-B71F-813AC8494C35"; //
			if (Id == undefined) {
				Id = "";
			}
			this.Id = Id
			this.getList();
		},
		onPullDownRefresh() {
			// this.reload = false;
			// //this.Page = 1;
			// this.listData = [];
			// this.getList();
		},
		onReachBottom() {
			this.status = 'more';
			this.getList();
		},
		methods: {

			del(Id) {
				var th = this;
				uni.showModal({
					title: '温馨提示',
					content: "确认删除当前数据吗?",
					showCancel: true,
					success: function(res) {
						if (res.confirm) {
							businessApi.DeletePrize(Id).then(data => {
								commonutils.showToast("删除成功", "success")
								th.Page = 1;
								th.listData =[];
								th.reload=false;
								th.getList();
							})
						}
					}
				});
			},
			addPrize() {
				uni.$u.route('/admin/business/prizeEdit');
			},
			edit(Id) {
				uni.$u.route('/admin/business/prizeEdit?Id=' + Id);
			},
			getList() {
				var th = this;
				if (!this.reload) {
					this.status = 'loading';
					businessApi.GetPrizeConfigList(this.Id, this.Page, this.Limit, "").then(data => {
						console.log(data)
						this.listData = this.listData.concat(data.Data.data);
						this.Page = this.Page + 1;
						if (data.Data.data.length == 0 || data.Data.data.length < th.Limit) {
							this.status = "nomore";
							this.reload = true;
						}
					})
				}
			},
		}
	};
</script>

<style>
	.icons {
		position: fixed;
		margin-top: 800rpx;
		z-index: 999;
		margin-left: -15rpx;
		width: 100%;
		text-align: right;
	}

	.mini-btn {
		float: right;
		/* 让Button向右浮动 */
		margin-left: 10rpx;
		/* 如果需要边距，可以添加左边距 */
	}

	.banner {
		height: 360rpx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.banner-img {
		width: 100%;
	}

	.banner-title {
		max-height: 84rpx;
		overflow: hidden;
		position: absolute;
		left: 30rpx;
		bottom: 30rpx;
		width: 90%;
		font-size: 32rpx;
		font-weight: 400;
		line-height: 42rpx;
		color: white;
		z-index: 11;
	}

	.uni-media-list-logo {
		width: 90rpx;
		height: 70rpx;
	}

	.uni-media-list-body {
		height: auto;
		justify-content: space-around;
	}

	.uni-media-list-text-top {
		height: 50rpx;
		font-size: 28rpx;
		display: flex;
		flex-direction: row;
		flex-direction: row;
		justify-content: space-between;
		color: #777;
	}

	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: #777;
	}
</style>