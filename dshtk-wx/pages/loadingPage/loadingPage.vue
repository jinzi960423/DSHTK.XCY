<template>
    <view class="column-c-c">

        <!-- 这个scr里内容替换成原型"点击"的网络图 如果图片觉得小调整width,height的值-->
        <image src="https://www.sfj365.com/dshtk/images/personal_title.png"
            style="width: 80rpx;height: 80rpx;margin-top: 230rpx;" mode="aspectFit"></image>

        <text class="title">点一点，锦上添花！</text>

        <!-- 三个点的网路图 -->
        <image src="https://www.sfj365.com/dshtk/images/personal_title.png"
            style="width: 100rpx;height: 20rpx;margin-top: 500rpx;" mode="aspectFit"></image>

        <text class="fs28 color-666 m-t-40">赠人玫瑰，手留余香，也祝您好运相伴！</text>

    </view>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        onLoad() {

            //1，你想再哪里用这个页面
            //通过push方式用： uni.$u.route('/pages/loadingPage/loadingPage')

            //关闭上个页面：
            // uni.redirectTo({
            //     url:'/pages/turntable/loadingPage'
            // })

            //关闭之前所有页面
            // uni.reLaunch({
            //     url:'/pages/turntable/loadingPage'
            // })



            //2，从这个页面想去哪个页面,页面停留3s后进入某个页面
            // uni.$u.sleep(3000).then(() => {

            //     通过push方式用： uni.$u.route('你要进入的页面')

            //     关闭上个页面：
            //     uni.redirectTo({
            //         url:'你要进入的页面'
            //     })

            //     关闭之前所有页面
            //     uni.reLaunch({
            //         url:'你要进入的页面'
            //     })
            // })

        }
    }
</script>

<style lang="scss" scoped>
    .title {
        height: 48rpx;
        font-family: Microsoft YaHei;
        font-weight: bold;
        font-size: 48rpx;
        color: #3E3E3E;
        margin-top: 60rpx;
    }
</style>