<template>
    <div id="app">
        <SideNav/>
        <TitleBar v-bind:sectionTitle='sectionTitle'/>
        <Home v-bind:cards='cards'/>
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
        },
        data : function() {
            return {
                sectionTitle : 'Thulj.fr - Site WEB d\'un développeur passionné',
                cards : [
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'newspaper'
                    }
                ]
            }
        }
    }
</script>

<style>
    body {
        background:#f5f5f6;
    }
</style>
