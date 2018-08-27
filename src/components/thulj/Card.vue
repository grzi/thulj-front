<template>
    <div class="col s12 m4">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <div class="badge blue-grey darken-3"><font-awesome-icon :icon="card.section" size="2x"/></div>
                <div class="card-title"><b>{{card.title}}</b></div>
                <p>{{card.description}}</p>
                <div class="datePublish"><b>Publié le : </b> {{card.publishDate}}</div>
            </div>

            <div class="card-action">
                <a href="#">Accéder à la page</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props : ['card']
    }
</script>

<style scoped>
    .card-action{text-align: right}
    .badge{position: absolute; right: 0; top: 0; padding: 10px;}
    .datePublish{margin-top:25px;font-size:12px;}
</style>