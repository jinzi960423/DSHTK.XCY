<template>
    <view>
        <z-paging ref="paging" v-model="dataList" @query="refreshData">
            <template #top>
                <view class="column-c-c p-b-30">
                    <text class="m-t-40 m-b-20 fw-bold font-family color-1d1d1d fs48">沙县小吃</text>
                    <u-icon name="map" color="#1d1d1d" size="24rpx" label="松江区茸梅路10号楼101室" label-color="#1d1d1d"
                        label-size="24rpx"></u-icon>
                </view>
            </template>
            <view v-for="(item,index) in dataList" :key="index" class="row m-b-20 p-lr-20"
                @click="$u.route('/pages/forward/forward')">
                <net-image width="300rpx" height="300rpx"
                    imageUrl="https://www.sfj365.com/dshtk/images/tck_gift.png"></net-image>
                <view class="column m-l-20 flex1 p-b-10 p-t-10" style="justify-content: space-between;">
                    <view class="column">
                        <text class="fs32 fw-400 color-1d1d1d">矿泉水</text>
                        <text class="m-t-30 color-666 fw-400">仅需<span class="fw-bold">2</span>人助力，即可领取</text>
                    </view>
                    <view class="item-btn">
                        <u-icon name="arrow-right-double" size="28rpx" color="white" label="马上摇人" label-color="white"
                            label-size="28rpx" labelPos="left"></u-icon>
                    </view>
                </view>
            </view>
            <template #bottom>
                <view class="p-t-20">
                    <safe-bottom-view>
                        <bottom-support-info></bottom-support-info>
                    </safe-bottom-view>
                </view>
            </template>
        </z-paging>
    </view>

</template>

<script>
    export default {
        data() {
            return {
                dataList: []
            };
        },
        methods: {
            refreshData() {
                this.$refs.paging.complete([1, 2, 3, 4, 5])
            }
        },
    }
</script>

<style>
    page {
        background-color: white;
    }
</style>

<style lang="scss" scoped>
    .item-btn {

        height: 70rpx;
        background: linear-gradient(0deg, #FF7C79, #FE8A62);
        border-radius: 35rpx;
        width: 280rpx;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>