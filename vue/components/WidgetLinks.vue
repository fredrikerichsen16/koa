<script>
    export default {
        name: 'WidgetLinks',

        data() {
            return {}
        }
    };

</script>

<template>

<div id="widget_links">
    <router-link
      v-for="(route, idx) in $router.options.routes"
      :key="idx"
      :to="route.path">{{ route.meta.name }} </router-link>
</div>

</template>

<style scoped>
div#widget_links {
    position: absolute;
    bottom: 11px;
    left: 500px;

    a {
        font-family: Arial, "Times New Roman";
        color: #515151;
        font-weight: 300;
        text-transform: uppercase;
    }
}
</style>
