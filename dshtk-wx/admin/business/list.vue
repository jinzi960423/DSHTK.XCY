<template>
	<view>
		<uni-icons @click="addBusiness" type="plus-filled" :size="60" class="icons" color="#2979ff" />
		<view class="uni-list">
			<block v-for="(value, index) in listData" :key="index">
				<view class="uni-list-cell"> <!-- hover-class="uni-list-cell-hover" -->
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.BusinessActivity"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">
								<text>{{ value.BnsinessName }}</text>

							</view>
							<view class="uni-media-list-text-bottom">
								<text>{{ value.Address }}</text>
							</view>
							<div style="height: 10rpx;"></div>
							<view class="uni-media-list-text-bottom">
								<view class="button-sp-area" style="width: 100%;">
									<button @click="homeConfig(value.Id)" class="mini-btn" type="default" plain="true"
										size="mini">首页设置</button>
									<button @click="prizeList(value.Id)" class="mini-btn" type="default" plain="true"
										size="mini">奖品管理</button>
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
				adminId: "",
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
		onLoad() {
			this.adminId = appStorage.getStorage("adminId")
			this.getList();
		},
		mounted() {
			 
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
			addBusiness() {
				uni.$u.route('/admin/business/edit')
			},
			prizeList(Id) {
				uni.$u.route('/admin/business/prizeList?Id=' + Id);
			},
			homeConfig(Id) {
				uni.$u.route('/admin/business/homeConfig?Id=' + Id);
			},
			edit(Id) {
				uni.$u.route('/admin/business/edit?Id=' + Id);
			},
			getList() {
				var th = this;
				if (!this.reload) {
					this.status = 'loading';
					businessApi.GetBusinessListByUid(this.adminId, this.Page, this.Limit).then(data => {
						console.log(data)
						this.listData = this.listData.concat(data.Data);
						this.Page = this.Page + 1;
						if (data.Data.length == 0 || data.Data.length < th.Limit) {
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