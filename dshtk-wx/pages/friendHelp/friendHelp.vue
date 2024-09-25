<template>
    <view class="column">
        <image src="https://www.51pjdj.com/dshtk/images/personal_bg.png" mode="widthFix" style="width: 100%;">
        </image>

        <view class="content-bg p-tb-30 p-lr-30" style="padding-bottom: 100rpx;">

            <text>好友助力领好礼</text>

            <net-image height="300rpx" width="100%"
                imageUrl="https://www.51pjdj.com/dshtk/images/tck_gift.png"></net-image>

            <view class="column-c-c m-t-30">

                <text class="fs32 color-white row-c-c m-b-30"
                    style="background-color: #FF6C4E;height:60rpx;border-radius: 30rpx;padding: 0 60rpx;">
                    可乐一瓶
                </text>

                <net-image height="385rpx" width="385rpx"></net-image>

                <view class="m-t-20 fs28 color-1d1d1d">识别图中二维码，助力即可</view>

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

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .top-bg {
        height: 400rpx;
        background: linear-gradient(90deg, #FF8A48 0%, #FF4057 100%);
        border-radius: 0rpx 0rpx 133rpx 133rpx;
        display: flex;

        text {
            margin-top: 60rpx;
            font-weight: 400;
            font-size: 60rpx;
            color: #FFFFFF;
            width: 100%;
            text-align: center;
        }
    }

    .content-bg {
        background: #FFFFFF;
        box-shadow: 0rpx 0rpx 11rpx 0rpx rgba(255, 69, 85, 0.38);
        border-radius: 20rpx;
        margin-left: 22rpx;
        margin-right: 22rpx;
        margin-top: -200rpx;
    }
</style>