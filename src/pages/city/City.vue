<template>
    <div>
        <city-header></city-header>
        <city-serach :cities="cities"></city-serach>
        <city-list :cities="cities"
                   :hotCities="hotCities"
                   :letter="letter"
        ></city-list>
        <city-alphabet
                :cities="cities"
                @change="handleLetterChange"
        ></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from './components/Header'
    import CitySerach from './components/Search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'

    export default {
        name: "City",
        components: {
            CityHeader,
            CitySerach,
            CityList,
            CityAlphabet
        },
        data() {
            return {
                cities: {},
                hotCities: [],
                letter: ''
            }
        },
        methods: {
            getCityList() {
                axios.get('/mock/city.json')
                    .then(this.getCityListSucc)
            },
            getCityListSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            },
            handleLetterChange(letter) {
                this.letter = letter
            }
        },
        mounted() {
            this.getCityList()
        }
    }

</script>

<style scoped>

</style>