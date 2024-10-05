<template>
	<view>
		<view class="uni-list">
			<block v-for="(value, index) in listData" :key="index">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.ImgUrl"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">
								<text>{{ value.Remark }}</text>
								<text>{{ value.WriteTime }}</text>
							</view>
							<view class="uni-media-list-text-bottom">
								<text>{{ value.Number }}</text>
								<text>{{ value.State }}</text>
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
	import writeApi from './Write.js';
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
			getList() {
				var th = this;
				if (!this.reload) {
					this.status = 'loading';
					writeApi.GetPrizeListByBusinessId(this.adminId, this.Page, this.Limit).then(data => {
						console.log(data)
						this.listData = this.listData.concat(data.Data);
						this.Page = this.Page + 1;
						if (data.Data.length == 0 ||  data.Data.length < th.Limit) {
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