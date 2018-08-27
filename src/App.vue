<template>
    <div id="app">
        <SideNav/>
        <TitleBar/>
        <Home/>
    </div>
</template>

<script>
    import SideNav from './components/thulj/SideNav.vue'
    import TitleBar from './components/thulj/TitleBar.vue'
    import Home from './components/thulj/Home.vue'

    export default {
        name: 'app',
        components: {
            SideNav,
            TitleBar,
            Home
        }
    }
</script>

<style>
    body {
        background:#f5f5f6;
    }
</style>
