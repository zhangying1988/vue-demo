<template>
    <div>
        <city-header></city-header>
        <city-serach></city-serach>
    </div>
</template>

<script>
    import CityHeader from './components/Header'
    import CitySerach from './components/Search'

    export default {
        name: "City",
        components: {
            CityHeader,
            CitySerach
        }
    }

</script>

<style scoped>

</style>