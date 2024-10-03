<script>
    export default {
        onLaunch: function() {
            console.log('App Launch')
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        }
    }
</script>

<style lang="scss">
    /*每个页面公共css */
    @import "@/uni_modules/uview-plus/index.scss";
    @import "@/utils/common.css";   
	@import '@/common/uni-nvue.css';
	@import '@/common/uni.css';
	@import '@/static/customicons.css';

    page {
        background-color: #f2f2f2;
    }
</style>