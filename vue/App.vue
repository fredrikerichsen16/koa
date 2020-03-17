<script>

import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import Quote from './components/Quote';
import Clock from './components/Clock';
import WidgetLinks from './components/WidgetLinks';
import Sidebar from './widgets/Sidebar';

export default {
    name: 'App',
    data() {
        return {};
    },
    components: {
        Loader,
        SearchBar,
        Quote,
        Clock,
        Sidebar,
        WidgetLinks,
    },
}

</script>

<template>
    <div>
        <Loader />
        <Sidebar />

        <div id="background">
            <div id="content">
                <SearchBar />
            </div>
        </div>
        <div id="outside">
            <Clock />
            <Quote />
            <WidgetLinks />
        </div>
    </div>
</template>

<style lang="scss">

div#background {
    position: absolute;
    top: 40px;
    left: 85px;
    height: calc(100% - 120px);
    width: calc(100% - 120px);
    z-index: 1;

    background-image: url("/img/bg/cali.jpg");
    background-size: cover;

    div#content {
        position: relative;
        height: 100%;
        width: 100%;
    }
}

div#outside {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
}

</style>
