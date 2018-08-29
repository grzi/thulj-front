<template>
    <div id="app">
        <SideNav/>
        <TitleBar v-bind:sectionTitle='sectionTitle'/>
        <Home v-bind:cards='cards'/>
        <Footer/>
    </div>
</template>

<script>
    import SideNav from './components/thulj/SideNav.vue'
    import TitleBar from './components/thulj/TitleBar.vue'
    import Home from './components/thulj/Home.vue'
    import Footer from './components/thulj/Footer.vue'

    export default {
        name: 'app',
        components: {
            SideNav,
            TitleBar,
            Home,
            Footer
        },
        data : function() {
            return {
                sectionTitle : 'Accueil',
                cards : [
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'newspaper'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'newspaper'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'code'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'code'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'utensils'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'newspaper'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'code'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'newspaper'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'newspaper'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'newspaper'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'newspaper'
                    },
                    {
                        title:'Le site fait peau neuve !',
                        description:'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                        publishDate:'27/08/2018',
                        section:'newspaper'
                    },
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
