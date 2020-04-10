<template>
    <div>
        <div class="header-abs" v-if="showAbs">
            <router-link to="/">
                <div class="iconfont header-abs-back">&#xe646;</div>
            </router-link>
        </div>
        <div class="header-fixed" v-if="!showAbs" :style="opacityStyle">
            <router-link to="/" tag="div">
                <div class="iconfont header-fixed-back">&#xe646;</div>
                景点详情
            </router-link>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        }
        ,
        activated() {
            window.addEventListener('scroll', this.handleScroll)
        }
        ,
        deactivated() {
            window.removeEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                console.log(scrollTop)
                if (scrollTop > 60) {
                    let opacity = scrollTop / 140
                    opacity = opacity > 1 ? 1 : opacity
                    this.opacityStyle = {opacity};
                    this.showAbs = false
                } else {
                    this.showAbs = true
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        background rgba(0, 0, 0, .8)
        text-align center

        .header-abs-back
            width 0.8rem
            text-align center
            font-size 0.4rem
            position absolute
            top 0
            left 0
            color #fff

    .header-fixed
        position: fixed
        overflow: hidden
        top 0
        left 0
        right 0
        height $headerHeight
        line-height $headerHeight
        text-align center;
        color #fff
        background rgba(0, 0, 0, .8)
        font-size 0.32rem

        .header-fixed-back
            width 0.64rem
            text-align center
            font-size 0.4rem
            position absolute
            top 0
            left 0
            color #fff

</style>