<template>
    <nav class="white">
        <div class="nav-wrapper ">
            <span class="brand-logo black-text">{{sectionTitle}}</span>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "TitleBar",
        data : function() {
            return { sectionTitle : 'Hey You !'}
        }
    }
</script>

<style scoped>
    nav{position:fixed;top:0;padding-left: 120px;}
    .brand-logo{font-size:18px;text-transform: uppercase;}
</style>