<template>
    <div class="content">
        <div class="row">
            <div class="col s12 icon-block">



            </div>
        </div>
        <div class="row">
            <Card v-for="card in cards" v-bind:card="card"/>
        </div>
    </div>
</template>

<script>
    import Card from '@/components/thulj/Card.vue'
    export default {
        name: "Home",
        props: ['cards'],
        components: {
            Card
        }
    }
</script>

<style scoped>
    .content {padding-left: 105px; margin-top: 50px;}
</style>