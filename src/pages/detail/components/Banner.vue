<template>
    <div>
        <div class="banner">
            <img class="banner-img"
                 :src="bannerImg"
                 @click="handleBannerClick"
            >
            <div class="banner-info">
                <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe987;</span>39
                </div>
            </div>
        </div>
        <fade-animation>
            <gallary
                    :imgs="gallaryImgs"
                    v-show="showGallary"
                    @close="handleClose"
            ></gallary>
        </fade-animation>
    </div>
</template>

<script>
    import Gallary from "../../../gallary/Gallary";
    import FadeAnimation from "../../../fade/FadeAnimation";

    export default {
        name: "Banner",
        props: {
            bannerImg: String,
            gallaryImgs: Array
        },
        components: {
            Gallary,
            FadeAnimation
        },
        data() {
            return {
                showGallary: false
            }
        },
        methods: {
            handleBannerClick() {
                this.showGallary = true
            },
            handleClose() {
                this.showGallary = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow hidden
        height 0
        padding-bottom 55%

        .banner-img
            width 100%

        .banner-info
            display flex
            flex-direction row
            justify-content space-between
            position absolute
            left 0
            right 0
            bottom .2rem
            color #fff

            .banner-title
                font-size .32rem
                flex 1
                padding 0 .2rem

            .banner-number
                height .32rem
                line-height .32rem
                padding 0 .4rem
                background rgba(0, 0, 0, 1)
                border-radius .2rem

                .banner-icon
                    font-size .24rem

</style>