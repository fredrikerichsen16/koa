<script>

export default {
    name: 'Sidebar',

    data() {
        return {
            widgetOpen: false
        }
    },

    methods: {
        closeWidget() {
            this.$router.push('/');
        }
    }
}

</script>

<template>
    <div>
        <transition name="toggle-gray">
            <div id="gray"
                 v-if="widgetOpen"
                 @click="closeWidget"></div>
        </transition>

        <transition name="toggle-sidebar"
                    mode="out-in"
                    v-on:before-enter="widgetOpen = true"
                    v-on:before-leave="widgetOpen = false">
            <router-view id="sidebar"></router-view>
        </transition>
    </div>
</template>

<style lang="scss" scoped>

div#sidebar {
    height: 100%;
    width: 320px;
    position: absolute;
    background: white;
    z-index: 3;
}

// SIDEBAR TRANSITION
.toggle-sidebar-enter {
    transform: translateX(-350px);
}
.toggle-sidebar-enter-to {
    transform: translateX(0px);
}

.toggle-sidebar-leave {
    transform: translateX(0);
}
.toggle-sidebar-leave-to {
    transform: translateX(-350px);
}

.toggle-sidebar-enter-active,
.toggle-sidebar-leave-active {
    transition: transform .4s;
}

#gray {
    height: 100%;
    width: 100%;
    background-color: #000;
    z-index: 2;
    position: absolute;
    opacity: 0.85;

    // GRAY TRANSITION
    &.toggle-gray-enter {
        opacity: 0;
    }
    &.toggle-gray-enter-to {
        opacity: 0.85;
    }

    &.toggle-gray-leave {
        opacity: 0.85;
    }
    &.toggle-gray-leave-to {
        opacity: 0;
    }

    &.toggle-gray-enter-active,
    &.toggle-gray-leave-active {
        transition: opacity .4s .075s;
    }
}

</style>