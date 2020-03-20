<script>

export default {
    name: 'MiddleComponent',

    data() {
        return {
            slide: 0,
        };
    },

    components: {
        SearchBar: () => import('./SearchBar.vue'),
        SavedWebsites: () => import('./SavedWebsites.vue'),
    },

    methods: {
        next() {
            this.slide++;

            if(this.slide === 2) {
                this.slide = 0;
            }
        },

        prev() {
            this.slide--;

            if(this.slide === -1) {
                this.slide = 1;
            }
        }
    }
}

</script>

<template>
    <div>

        <div id="middle_component">
            <div class="arrow left" @click="prev"></div>

            <SearchBar v-if="slide === 0" />
            <SavedWebsites v-if="slide === 1" />

            <div class="arrow right" @click="next"></div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
    div#middle_component {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .arrow {
        width: 20px;
        height: 20px;
        top: calc(50% - 10px);
        position: absolute;
        display: inline-block;
        border-top: 4px solid rgba(128, 128, 128, 0.66);
        border-right: 4px solid rgba(128, 128, 128, 0.66);

        &.right {
            right: -50px;
            transform: rotate(45deg);
        }

        &.left {
            left: -50px;
            transform: rotate(-135deg);
        }
    }
</style>