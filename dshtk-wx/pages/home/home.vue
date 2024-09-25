<template>
    <page-meta :page-style="'overflow:'+(showGift?'hidden':'auto')"></page-meta>
    <view>
        <z-paging ref="paging" v-model="dataList" @query="refreshData">
            <template #top>
                <view class="column p-b-30">
                    <u-navbar placeholder title="首页" autoBack></u-navbar>
                    <view class="row-c-c m-t-40">
                        <text class="fw-bold font-family color-1d1d1d p-lr-40 fs48">沙县小吃</text>
                        <view style="position: absolute;right: 20rpx;">
                            <u-icon name="reload" size="24rpx" color="#1d1d1d" label="切换" label-color="#1d1d1d"
                                label-size="24rpx"></u-icon>
                        </view>
                    </view>
                    <view class="row-c-c m-t-20">
                        <u-icon name="map" color="#1d1d1d" size="24rpx" label="松江区茸梅路10号楼101室" label-color="#1d1d1d"
                            label-size="24rpx"></u-icon>
                    </view>
                </view>
            </template>
            <view v-for="(item,index) in dataList" :key="index" class="row-c-c m-b-20" style="position: relative;"
                @click="$u.route(item.path)">
                <net-image width="705rpx" height="355rpx"></net-image>
                <view class="item-bg p-lr-40">
                    <text class="fw-bold font-family color-1d1d1d fs40">{{item.name}}</text>
                    <text class="fw-400 m-t-20 font-family color-1d1d1d fs28">{{item.title}}</text>
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
    <gift-dialog :show="showGift" :info="giftInfo" @close="showGift=false"></gift-dialog>
</template>

<script>
    export default {
        data() {
            return {
                dataList: [],
                showGift: true,
                giftInfo: null,
            };
        },
        onLoad(options) {
            this.giftInfo = options
        },
        methods: {
            refreshData() {
                this.$refs.paging.complete([{
                    name: '白吃白喝',
                    title: '更多福利等你参与',
                    path: '/pages/free/free'
                }, {
                    name: '霸王餐',
                    title: '500元进群',
                    path: '/pages/activity/activity'
                }, {
                    name: '小仓库',
                    title: '我攒的家当都在这里',
                    path: '/pages/mine/mine'
                }])
            },
        },
    }
</script>

<style>
    page {
        background-color: white;
    }
</style>

<style lang="scss" scoped>
    .item-bg {
        position: absolute;
        border-radius: 13rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.65);
        width: 660rpx;
        height: 300rpx;
    }
</style>