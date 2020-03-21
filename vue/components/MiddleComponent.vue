<script>

export default {
    name: 'MiddleComponent',

    data() {
        let components = [
            {
                name: 'SearchBar',
                loaded: true,
            },
            {
                name: 'SavedWebsites',
                loaded: false,
            },
            {
                name: 'WeatherToday',
                loaded: false,
            },
        ];

        return {
            slide: 0,
            nSlides: components.length,
            components,
        };
    },

    components: {
        SearchBar: () => import('./SearchBar.vue'),
        SavedWebsites: () => import('./SavedWebsites.vue'),
        WeatherToday: () => import('./WeatherToday.vue'),
    },

    methods: {
        /**
         * Switch middle component
         * if n = -1: go one back
         * if n = undefined | null: go one forward
         * if n = integer: go to that index
         *
         * @param n - int | undefined | null
         */
        next(n) {
            if(n === -1)
            {
                if(this.slide === 0) {
                    this.slide = this.nSlides - 1;
                } else {
                    this.slide--;
                }
            }
            else if(!n)
            {
                if(this.slide >= (this.nSlides - 1)) {
                    this.slide = 0;
                } else {
                    this.slide++;
                }
            }
            else
            {
                this.slide = n;
            }

            this.components[this.slide].loaded = true;
        }
    },

    mounted() {
        let self = this;

        window.addEventListener('keydown', function(e) {
            let inputs = document.querySelectorAll('input[type="text"]');
            let magicSearchInput = document.getElementById('magic_search_input');

            for(let input of inputs) {
                if(magicSearchInput === document.activeElement && magicSearchInput.value === '') {
                    continue;
                }

                if(input === document.activeElement) {
                    return;
                }
            }

            if(e.which === 39) {
                self.next();
            }

            if(e.which === 37) {
                self.next(-1);
            }
        });
    }
}

</script>

<template>
    <div>

        <div id="middle_component">
            <component
                    v-for="(c, index) in components"
                    :is="c.name"
                    v-if="c.loaded"
                    v-show="index === slide"
                    :key="index"></component>

            <ul id="navigation_dots">
                <li v-for="n in nSlides"
                    :class="{selected: (n - 1) === slide}"
                    @click="next(n - 1)"></li>
            </ul>
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

ul#navigation_dots {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);

    li {
        height: 8px;
        width: 8px;
        display: inline-block;
        border-radius: 50%;
        margin-right: 8px;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);

        &.selected {
            background-color: rgba(255, 255, 255, 0.8);
        }

        &:hover {
            background-color: rgba(255, 255, 255, 0.65);
            cursor: pointer;
        }
    }
}

</style>