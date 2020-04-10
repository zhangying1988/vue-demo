<template>
    <div id="app">
        <keep-alive>
            <!-- exclude="Detail"除了detail页面不被缓存 -->
            <!-- <router-view/> 显示的是当前路由地址所对应的的内容 -->
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
</style>
