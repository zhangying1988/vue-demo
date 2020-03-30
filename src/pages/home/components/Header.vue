<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-fanhui back-icon"></div>
        </div>
        <div class="header-input"><span class="iconfont icon-sousuo"></span>内容</div>
        <router-link to="/city">
            <div class="header-right">{{city}}<span class="iconfont icon-jiantou arrow-right"></span></div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        props: {
            city: String
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../../assets/styles/varibles.styl"
    .header
        display flex
        line-height $headerHeight
        background $bgColor
        color #fff

        .header-left
            margin-left: 0.1rem
            float: left
            width: .64rem

        .header-input
            padding-left: .2rem
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            color: #ccc
            background: #fff
            border-radius: .1rem

            .back-icon
                text-align center
                font-size .4rem

        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #ffffff

            .arrow-right
                font-size .3rem
                margin-left -.05rem
                padding 0 .1rem
</style>