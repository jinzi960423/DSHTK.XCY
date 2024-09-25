<template>
    <view style="position: relative;">
        <image src="https://www.51pjdj.com/dshtk/images/turntable_bg.jpg" mode="aspectFill"
            style="width: 100vw;;height: 100vh;">
        </image>
        <view class="column" style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;">
            <view class="row-c" style="margin-top: 120rpx;margin-left: 40rpx;">
                <text class="top-title">点一点，锦上添花！</text>
            </view>
            <view class="column-c-c" style="margin-top: 140rpx;">
                <image src="https://www.51pjdj.com/dshtk/images/turntable_wz.png" mode="widthFix" style="width: 80%;">
                </image>
                <text class="shop-title">沙县小吃</text>
                <view style="margin-top: 100rpx;">
                    <my-turntable-draw ref="raffleWheel" :prizeList="prizeList" :targetIndex="targetIndex"
                        @befoterClick="befoterClick" @afterClick="afterClick">
                    </my-turntable-draw>
                </view>
                <text class="m-t-40 fs28" style="color: #4E3531;">奖品由门店提供，消费时领取。</text>
                <view class="m-t-40 p-b-30">
                    <bottom-support-info></bottom-support-info>
                </view>
            </view>
        </view>
    </view>

</template>

<script>
    export default {
        data() {
            return {
                prizeList: [{
                        name: '可乐一瓶',
                    },
                    {
                        name: '鸡腿一个',
                    },
                    {
                        name: '矿泉水一瓶',
                    },
                    {
                        name: '谢谢参与',
                    },
                    {
                        name: '鸡腿一个',
                    },
                    {
                        name: '雪碧一瓶',
                    },
                    {
                        name: '鸡腿一个',
                    },
                    {
                        name: '谢谢参与',
                    }
                ],
                targetIndex: 0,
            };
        },
        onLoad() {

        },
        methods: {
            back() {
                uni.navigateBack()
            },
            befoterClick(data) {
                if (data.type == 'start') {
                    this.targetIndex = 3
                    data.callback && data.callback(this.targetIndex)
                }
            },
            afterClick(data) {
                if (data.type == 'end') {
                    data.callback && data.callback()
                    uni.$u.route('/pages/home/home', data.content)
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .top-title {
        font-weight: normal;
        font-size: 37rpx;
        color: #FFFFFF;
        font-family: Alibaba PuHuiTi 3.0;
    }

    .shop-title {
        height: 70rpx;
        font-family: Alibaba PuHuiTi 3.0;
        font-weight: normal;
        font-size: 73rpx;
        color: #FFFFFF;
        margin-top: 30rpx;
    }
</style>