<template>
    <nav class="white">
        <div class="nav-wrapper ">
            <span class="brand-logo black-text">{{sectionTitle}}</span>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'TitleBar',
    props: ['sectionTitle']
  }
</script>

<style scoped>
    nav {
        position: fixed;
        top: 0;
        padding-left: 120px;
        z-index: 50
    }

    .brand-logo {
        font-size: 18px;
    }
</style>
