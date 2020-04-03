<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="this.iconsList"></home-icons>
        <home-recommend :list="this.recommendList"></home-recommend>
        <home-weekend :list="this.weekendList"></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data() {
            return {
                swiperList: [],
                iconsList: [],
                recommendList: [],
                weekendList: [],
                lastCity: ''
            }
        },
        computed: {
            ...mapState(['city'])
        },
        mounted() {
            //页面挂载后 执行这个函数
            this.lastCity = this.city
            this.getHomeInfo()
        },
        activated() {
            if (this.lastCity !== this.city) {
                this.lastCity = this.city
                this.getHomeInfo()
            }
        },
        methods: {
            getHomeInfo() {
                axios.get('/mock/index.json?city=' + this.city)
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                // console.log(res.data)
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.swiperList = data.swiperList
                    this.iconsList = data.iconList
                    this.recommendList = data.hotList
                    this.weekendList = data.weekendList
                }
            }
        }
    }
</script>

<style scoped>

</style>