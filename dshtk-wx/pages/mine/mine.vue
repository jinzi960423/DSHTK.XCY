<template>
    <view class="column">
        <image src="https://www.sfj365.com/dshtk/images/personal_bg.png" mode="widthFix" style="width: 100%;"></image>
        <view class="content-bg p-lr-30 column-c-c">
            <net-image style="width: 92rpx;height: 92rpx;" radius="46rpx"></net-image>
            <text class="m-t-30 color-1d1d1d fs28 font-family fw-400">我是一只鱼</text>
        </view>
        <view class="row-c m-t-30">
            <image src="https://www.sfj365.com/dshtk/images/personal_title.png" style="width: 40rpx;height: 40rpx;"
                class="m-lr-20"></image>
            <text class="fs28 color-1d1d1d fw-400 font-family">我的仓库</text>
        </view>

        <view class="column m-t-20 m-lr-20">
            <view v-for="(item,index) in dataList" :key="index" class="color-bg-white b-r-8 row-c H100 p-lr-20"
                style="margin-bottom: 2rpx;" @click="$u.route('/pages/redemption/redemption')">
                <net-image width="60rpx" height="60rpx" radius="30rpx"
                    imageUrl="https://www.sfj365.com/dshtk/images/tck_gift.png"></net-image>
                <text class="fs28 m-lr-20 fw-400 color-1d1d1d flex1">鸡翅</text>
                <text class="fs28 fw-400 color-1d1d1d m-r-20">2</text>
                <u-icon name="arrow-right" color="#999" size="24rpx"></u-icon>
            </view>
        </view>

        <view class="m-t-40 p-b-30">
            <bottom-support-info></bottom-support-info>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                dataList: [1, 2, 3, 4]
            };
        }
    }
</script>

<style lang="scss" scoped>
    .content-bg {
        background: #FFFFFF;
        box-shadow: 0rpx 0rpx 11rpx 0rpx rgba(255, 69, 85, 0.38);
        border-radius: 20rpx;
        margin-left: 22rpx;
        margin-right: 22rpx;
        margin-top: -250rpx;
        padding-top: 60rpx;
        padding-bottom: 60rpx;
    }
</style>