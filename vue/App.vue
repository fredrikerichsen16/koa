<script>

import Loader from '@/components/Loader';
import MiddleComponent from '@/components/MiddleComponent';
import Quote from '@/components/Quote';
import Clock from '@/components/Clock';
import WidgetLinks from '@/components/WidgetLinks';
import Sidebar from '@/widgets/Sidebar';

export default {
    name: 'App',
    data() {
        return {};
    },
    components: {
        Loader,
        MiddleComponent,
        Quote,
        Clock,
        Sidebar,
        WidgetLinks,
    },
}

</script>

<template>
    <div id="background">
        <Loader />
        <Sidebar />

        <div id="content">
            <MiddleComponent />
            <WidgetLinks />
            <Quote />
        </div>
    </div>
</template>

<style lang="scss">

div#background {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-size: cover;

    div#content {
        position: relative;
        height: 100%;
        width: 100%;
    }
}

</style>
