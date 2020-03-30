<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl"/>
                    </div>
                    <p class="icon-desc">{{item.title}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "Icons",
        data() {
            return {
                swiperOption: {
                    autoPlay: false
                },
                iconList: [
                    {
                        "title": "景点门票",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
                    },
                    {
                        "title": "一日游",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"
                    },
                    {
                        "title": "本地玩乐",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png"
                    },
                    {
                        "title": "动植物园",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png"
                    },
                    {
                        "title": "必游榜单",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png"
                    },
                    {
                        "title": "自然风光",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png"
                    },
                    {
                        "title": "海滨海岛",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png"
                    },
                    {
                        "title": "踏青赏花",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png"
                    },
                    {
                        "title": "城市观光",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png"
                    },
                    {
                        "title": "全部玩乐",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png"
                    }
                ],
            }
        },
        computed: {
            pages() {
                const pages = []
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixins.styl'
    .icons
        .icon
            position relative
            float left
            width 25%
            padding-bottom 25%
            height 0
            overflow: hidden

        .icon-img
            position: absolute
            top 0
            left 0
            right 0
            bottom .44rem

            .icon-img-content
                height 100%
                display block
                margin 0 auto

        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            line-height .44rem
            text-align center
            color $darkTextColor
            ellipsis()

</style>