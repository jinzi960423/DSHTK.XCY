<template>
    <view class="view-bg" style="background-image: url('https://www.sfj365.com/dshtk/images/zphx_bg.jpg')">

        <view class="content-bg" style="background-image: url('https://www.sfj365.com/dshtk/images/zphx_whitebg.png');">

            <view class="row-c-c">
                <net-image height="60rpx" width="60rpx"
                    imageUrl="https://www.sfj365.com/dshtk/images/tck_gift.png"></net-image>
                <text class="fs28 m-l-10 fw-400 color-1d1d1d">鸡翅</text>
            </view>

            <view class="column-c-c" style="margin: 100rpx; 0">
                <net-image width="400rpx" height="400rpx"></net-image>
                <text class="fs28 m-l-10 fw-400 color-1d1d1d m-t-40">券号 00112233445566</text>
            </view>

            <text class="fs28 fw-bold color-1d1d1d">核销说明</text>
            <text class="fs28 fw-400 color-1d1d1d m-t-20">1.门店提供的奖品必须按照要求给客户核销兑现，如果不兑现，投诉电话18121402800；</text>
            <text class="fs28 fw-400 color-1d1d1d m-t-10">2.本公司仅提供软件服务，客户和商家在使用过程中产生的问题，本公司不承担任何责任。</text>

        </view>

        <view class="m-t-40 p-b-30">
            <bottom-support-info subTitleColor="white" titleColor="white"></bottom-support-info>
        </view>

    </view>
</template>

<script>
    export default {
        data() {
            return {

            };
        }
    }
</script>

<style lang="scss" scoped>
    .view-bg {
        padding-top: 22rpx;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100vw;
        height: 100vh;
    }

    .content-bg {
        background: #FFFFFF;
        box-shadow: 0rpx 0rpx 11rpx 0rpx rgba(255, 69, 85, 0.38);
        border-radius: 20rpx;
        margin: 22rpx;
        padding: 40rpx;
        display: flex;
        flex-direction: column;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>