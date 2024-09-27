<template>
    <view>
        <u-overlay :show="show">
            <view class="gift-view">
                <text class="title">停一下!</text>
                <text class="fs32 color-white m-t-30">恭喜你中奖了</text>
                <view class="column-c-c m-t-40" style="position: relative;">
                    <image src="https://www.sfj365.com/dshtk/images/tck_bg.png"></image>
                    <view class="column-c" style="position: absolute;top: 0;bottom: 0;justify-content: space-between;">
                        <image src="https://www.sfj365.com/dshtk/images/tck_gift.png" mode="aspectFit"
                            style="width: 300rpx;height: 300rpx;">
                        </image>
                        <text class="title2">奖品在“小仓库”</text>
                    </view>
                </view>
                <view class="m-t-40">
                    <u-icon name="close-circle" color="white" size="60rpx" @click="close"></u-icon>
                </view>
            </view>
        </u-overlay>
    </view>
</template>

<script>
    export default {
        name: "gift-dialog",
        props: {
            show: {
                type: Boolean,
                default: false
            },
            info: {
                type: Object,
                default: null
            }
        },
        data() {
            return {

            };
        },
        methods: {
            close() {
                this.$emit('close')
            }
        },
    }
</script>

<style lang="scss" scoped>
    .gift-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }

    .title {
        font-family: Alibaba PuHuiTi 3.0;
        font-weight: normal;
        font-size: 100rpx;
        color: #F8E8A9;
    }

    .title2 {
        font-family: Alibaba PuHuiTi 3.0;
        font-weight: normal;
        font-size: 48rpx;
        color: #E95F01;
        margin-bottom: 40rpx;
    }
</style>