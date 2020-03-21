<script>

import { mapState, mapMutations } from 'vuex';

export default {
    name: 'SearchMenu',

    data() {
        return {};
    },

    computed: {
        ...mapState(['magicSearchPosition']),
    },

    props: {
        query: {
            type: String,
            required: true
        }
    },

    watch: {
        query(newVal, oldVal) {
            console.log(oldVal, newVal);
        }
    },

    methods: {
        ...mapMutations(['CHANGE_MAGIC_SEARCH_POSITION']),

        mouseOverItem(n) {
            this.CHANGE_MAGIC_SEARCH_POSITION(n);
        },

        clickItem() {
            location.href = 'http://www.wolframalpha.com';
        }
    },
}

</script>

<template>

<div id="menu">
    <ul>
        <li v-bind:class="{ highlight: magicSearchPosition === 1 }"
            @mouseover="mouseOverItem(1)"
            @mouseleave="mouseOverItem(0)"
            @click="clickItem">
            <div class="icon-wrapper"
                 style="background-color: rgb(237, 104, 129)">
                <img src="img/icons/search-menu/math.png" alt="Math Icon">
            </div>
            <p>= 400</p>
            <img src="img/icons/search-menu/arrow.png" alt="Arrow right" class="arrow">
        </li>
        <li v-bind:class="{ highlight: magicSearchPosition === 2 }"
            @mouseover="mouseOverItem(2)"
            @mouseleave="mouseOverItem(0)">
            <div class="icon-wrapper"
                 style="background-color: rgba(100, 118, 243)">
                <img src="img/icons/search-menu/google.png" alt="Google Icon">
            </div>
            <p>Search Google</p>
            <img src="img/icons/search-menu/arrow.png" alt="Arrow right" class="arrow">
        </li>
        <li v-bind:class="{ highlight: magicSearchPosition === 3 }"
            @mouseover="mouseOverItem(3)"
            @mouseleave="mouseOverItem(0)">
            <div class="icon-wrapper"
                 style="background-color: rgba(244, 195, 109)">
                <img src="img/icons/search-menu/maps.png" alt="Google Maps Icon">
            </div>
            <p>Search Google Maps</p>
            <img src="img/icons/search-menu/arrow.png" alt="Arrow right" class="arrow">
        </li>
        <li v-bind:class="{ highlight: magicSearchPosition === 4 }"
            @mouseover="mouseOverItem(4)"
            @mouseleave="mouseOverItem(0)">
            <div class="icon-wrapper"
                 style="background-color: rgb(104, 237, 124)">
                <img src="img/icons/search-menu/currency-conversion.png" alt="Currency Conversion Icon">
            </div>
            <p>24 EUR = 244 NOK</p>
            <img src="img/icons/search-menu/arrow.png" alt="Arrow right" class="arrow">
        </li>
        <li v-bind:class="{ highlight: magicSearchPosition === 5 }"
            @mouseover="mouseOverItem(5)"
            @mouseleave="mouseOverItem(0)">
            <div class="icon-wrapper"
                 style="background-color: rgb(104, 228, 237)">
                <img src="img/icons/search-menu/book.png" alt="Book Icon">
            </div>
            <p>Buenos Aires</p>
            <img src="img/icons/search-menu/arrow.png" alt="Arrow right" class="arrow">
        </li>
    </ul>
</div>

</template>

<style lang="scss" scoped>
div#menu {
    margin-top: 15px;
    width: 380px;
    background: white;
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.6);

    ul li {
        padding: 6px 10px;
        margin-bottom: 6px;
        border-radius: 10px;
        transition: .4s background;

        &.highlight {
            background: rgb(245, 245, 245);
            cursor: pointer;
        }

        p, div, > img {
            display: inline-block;
        }

        p {
            font-family: Roboto, Arial;
            font-size: 18px;
            color: rgb(114, 119, 140);
            transform: translateY(-2px);
            margin-left: 8px;
        }

        div.icon-wrapper {
            height: 35px;
            width: 35px;
            border-radius: 10px;

            > img {
                height: 19px;
                width: 19px;
                margin-top: 8px;
                margin-left: 8px;
            }
        }

        img.arrow {
            float: right;
            height: 22px;
            width: 22px;
            margin-top: 8px;
            display: none;
        }
    }
}

.toggle-menu-enter {
    transform: translateY(-10px);
    opacity: 0;
}
.toggle-menu-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.toggle-menu-leave {
    transform: translateY(0);
    opacity: 1;
}
.toggle-menu-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

.toggle-menu-enter-active,
.toggle-menu-leave-active {
    transition: .35s opacity, .35s transform;
}
</style>