<template>
    <div class="header">
        <router-link to="/">
            <div class="iconfont header-back">&#xe646;</div>
        </router-link>
        城市选择
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>
<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl';

    .header {
        position: relative;
        overflow: hidden;
        height: $headerHeight;
        line-height: $headerHeight;
        text-align: center;
        color: #fff;
        background: $bgColor;
        font-size: 0.32rem;

        .header-back {
            width: 0.64rem;
            text-align: center;
            font-size: 0.4rem;
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
        }
    }
</style>