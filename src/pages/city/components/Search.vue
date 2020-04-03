<template>
    <div>
        <div class="search">
            <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div
                class="search-content"
                v-show="keyword"
                ref="search"
        >
            <ul>
                <li
                        class="search-item border-bottom"
                        v-for="item of list"
                        :key="item.id"
                        v-show="keyword"
                        @click="handleCityClick(item.name)"
                >{{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapActions} from 'vuex'
    export default {
        name: "Search",
        props: {
            cities: Object
        },
        data() {
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        computed: {
            hasNoData() {
                return !this.list.length
            }
        },
        methods: {
            handleCityClick(city) {
                // this.$store.dispatch('changeCity',city)
                this.changeCity(city)
                this.$router.push('./')
            },
            ...mapActions(['changeCity'])
        },
        watch: {
            keyword() {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            if (value.name.indexOf(this.keyword) > -1 || value.spell.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                }, 100)
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.search)
        }
    }
</script>

<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl';

    .search {
        height: 0.72rem;
        padding: 0 0.1rem;
        background: $bgColor;

        .search-input {
            box-sizing: border-box;
            width: 100%;
            height: 0.62rem;
            padding: 0 0.1rem;
            line-height: 0.62rem;
            text-align: center;
            border-radius: 0.06rem;
            color: #666;
        }
    }

    .search-content {
        z-index: 1;
        overflow: hidden;
        position: absolute;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #eee;

        .search-item {
            line-height: 0.62rem;
            padding-left: 0.2rem;
            color: #666;
            background: #fff;
        }
    }
</style>