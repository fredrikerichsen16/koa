<script>
    export default {
        name: 'WidgetLinks',

        data() {
            return {}
        },
    };

</script>

<template>

<div id="widget_links">
    <router-link
      v-for="(route, idx) in $router.options.routes"
      :key="idx"
      :to="route.path">
        <img :src="'img/icons/' + route.meta.icon" :alt="route.meta.name + 'Icon'">
    </router-link>
</div>

</template>

<style scoped>

div#widget_links {
    position: absolute;
    bottom: 11px;
    left: 500px;
}

a img {
    height: 55px;
    width: 55px;
    max-height: 55px;
    max-width: 55px;
    margin-left: 55px;
    display: inline-block;
}

</style>
