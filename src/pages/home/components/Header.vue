<template>
    <div class="header">
        <div class="header-left">返回</div>
        <div class="header-input">内容</div>
        <div class="header-right">城市</div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="stylus" scoped>
    @import "../../../assets/styles/varibles.styl"
    .header
        display flex
        line-height .86rem
        background  $bgColor
        color #fff
        .header-left
            width .64rem
            float left

        .header-input
            flex 1
            background #fff
            height .64rem
            line-height .64rem
            margin-top .24rem
            margin-left .2rem

        .header-right
            width .64rem
            float right
            text-align center


</style>