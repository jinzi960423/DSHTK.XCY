<template>
	<view class="raffle-wheel" style="background-image: url('https://www.sfj365.com/dshtk/images/turntable.png');">

		<view class="raffle-wheel-box">

			<view class="raffle-wheel-show"
				:style="'transform: rotate(' + rotates + 'deg);transition-duration: ' + duration + 's;'">
				<view class="item-block" v-for="(item, index) in prizeList" :key="index">
					<view class="item-view-block" :style="
            'transform: rotate(' + (degs * index) + 'deg) skewY(' + skew + 'deg);background: ' + ((index % 2) > 0 ? color1 : color2) + ';'
          ">
					</view>
					<view class="item-view"
						:style="'transform: translateX(-50%) rotate(' + (degs * index + (degs / 2)) + 'deg);width: ' + textWidth + ';'">
						<text>{{item.Remark}}</text>
					</view>
				</view>
			</view>

			<image class="raffle-wheel__action" src="https://www.sfj365.com/dshtk/images/pointer.png"
				@click="handleAction"></image>

		</view>

	</view>

</template>

<script>
	export default {
		props: {
			// 奖品列表
			prizeList: {
				type: Array,
				// 必须是偶数 且大于等于4
				validator: function(value) {
					return value.length % 2 === 0
				},
				required: true
			},
			// 奖品区块对应背景颜色
			colors: {
				type: Array,
				default: () => [
					'#FFF',
					'#FFEA97'
				],
				// 必须是偶数且仅为 2 个颜色相互交替
				validator: function(value) {
					return value.length === 2
				}
			},
			// 旋转动画时间 单位s
			duration: {
				type: Number,
				default: 8
			},
			// 旋转的圈数
			ringCount: {
				type: Number,
				default: 8
			},
			// 奖品名称所对应的 key 值
			strKey: {
				type: String,
				default: String
			},
			// 中奖单位
			targetIndex: {
				type: Number,
				default: 0
			}
		},
		watch: {
			prizeList: {
				immediate: true,
				deep: true,
				handler(val) {
					this.color1 = this.colors[0]
					this.color2 = this.colors[1]
					this.setView()
				}
			}
		},
		data() {
			return {
				isClick: true, // 当前是否可点击
				isShow: true, // 是否初始化
				skew: 0, // 偏移角度
				degs: 0, // 旋转角度
				color1: '#FFF',
				color2: '#FFF',
				textWidth: '50%',
				rotates: 0, // box旋转角度
				isRoteIndex: 0 // 已经选中的key
			}
		},
		methods: {
			// 计算当前每个deg
			setView() {
				let length = this.prizeList.length
				this.textWidth = 180 / length + '%'
				let _degs = 360 / length // 每个距离上一个的偏移角度
				if (length < 4) {

				} else { // 奖项大于等于4个
					this.degs = _degs
					this.skew = _degs - 90
				}
			},
			// 点击抽奖
			handleAction() {
				if (!this.isClick) {
					return false
				}
				this.isClick = false
				this.$emit('befoterClick', {
					type: 'start',
					callback: this.rotoreAction
				})
			},
			rotoreAction(index) {
				let _rotates = 0
				if (this.isShow) {
					let _len = this.prizeList.length - 1
					// 第一次角度 => (总项 - 当前项) * 角度 + 360 * 圈数
					_rotates = (_len - index) * this.degs + 360 * this.ringCount
					this.isShow = false
					this.rotates += _rotates + (this.degs / 2)
				} else {
					// 不是第一次 => 
					_rotates = -(index - this.isRoteIndex) * this.degs + 360 * this.ringCount
					this.rotates += _rotates
				}
				this.isRoteIndex = index
				this.setTimeOut()
			},
			setTimeOut() {
				setTimeout(() => {
					console.log('转动结束')
					this.$emit('afterClick', {
						type: 'end',
						content: this.prizeList[this.targetIndex],
						callback: this.endAction
					})
					this.isClick = true
				}, this.duration * 1000 + 100)
			},
			endAction() {
				console.log('本次选中的：' + this.prizeList[this.targetIndex].name)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.raffle-wheel {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
		width: 600rpx;
		height: 600rpx;
	}

	.raffle-wheel-box {
		border-radius: 210rpx;
		overflow: hidden;
		position: relative;
		top: -50rpx;
		left: 10rpx;
		width: 420rpx;
		height: 420rpx;
	}

	.raffle-wheel-show {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		border-radius: 50%;
	}

	.item-block {
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 50%;
		overflow: hidden;
	}

	.item-view-block {
		position: absolute;
		top: 0;
		right: 0;
		width: 50%;
		height: 50%;
		transform-origin: 0% 100%;
	}

	.item-view {
		box-sizing: border-box;
		position: absolute;
		top: 0;
		left: 50%;
		width: 25%;
		height: 50%;
		transform-origin: center 100%;
		font-size: 26rpx;
		text-align: center;
		padding-top: 10upx;

		text {
			color: #4E3531;
			writing-mode: vertical-rl;
			text-orientation: upright;
		}
	}

	.raffle-wheel__action {
		position: absolute;
		top: calc(50% - 80rpx);
		left: calc(50% - 80rpx);
		width: 160rpx;
		height: 160rpx;
	}
</style>