<template>
    <div>
        <detail-banner
                :sightName="sightName"
                :bannerImg="bannerImg"
                :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <detail-list
                :list="list"
        ></detail-list>

    </div>
</template>

<script>
    import DetailHeader from "./components/Header";
    import DetailBanner from "./components/Banner"
    import DetailList from "./components/List";
    import axios from 'axios'

    export default {
        name: "Detail",
        components: {
            DetailHeader,
            DetailBanner,
            DetailList
        },
        data() {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
                list: []
            }
        },
        mounted() {
            this.getDetailInfo()
        },
        methods: {
            getDetailInfo() {
                // axios.get('/api/detail.json?id=' + this.$route.params.id)
                axios.get('/api/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                })
                    .then(this.handleGetSucc)
            },
            handleGetSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.list = data.categoryList
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
</style>