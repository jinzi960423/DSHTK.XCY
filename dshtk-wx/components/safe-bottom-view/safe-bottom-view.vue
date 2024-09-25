<template>

    <view :style="{'padding-bottom':safeBottom+'rpx'}">
        <slot></slot>
    </view>

</template>

<script>
    export default {
        name: "safe-bottom-view",
        data() {
            return {

                safeBottom: 0

            };
        },
        mounted() {

            let sys = uni.getSystemInfoSync()

            var bottom = 10

            if (sys.safeAreaInsets.bottom > 0) {

                bottom = sys.safeAreaInsets.bottom
            }

            this.safeBottom = bottom
        },
    }
</script>

<style lang="scss" scoped>

</style>