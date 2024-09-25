<template>
    <view class="column-c-c">
        <text class="fw-400 fs24" :style="{color:titleColor}">私域拓客</text>
        <text class="fw-400 fs24" :style="{color:subTitleColor}">合作电话 18121402800</text>
    </view>
</template>

<script>
    export default {
        name: "bottom-support-info",
        props: {
            titleColor: {
                type: String,
                default: '#4E3531'
            },
            subTitleColor: {
                type: String,
                default: '#583F3B'
            }
        },
        data() {
            return {

            };
        }
    }
</script>