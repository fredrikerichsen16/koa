<script>

import SearchMenu from './SearchMenu';

export default {
    components: {
        SearchMenu
    },

    name: 'SearchBar',

    data() {
        return {
            searchEngine: 'Google',
            query: '',
            showMenu: false,
        };
    },

    computed: {
        /**
         * Get placeholder attribute for input, depending on user's preferred search engine
         */
        placeholder() {
            return 'Search ' + this.searchEngine + '...';
        },

        /**
         * Get action attribute for form, depending on user's preferred search engine
         */
        action() {
            if(this.searchEngine === 'Google') {
                return "https://www.google.com/search";
            }
        }
    },

    methods: {
        search() {
            if(this.query === '') {
                this.showMenu = false;
            } else {
                this.showMenu = true;
            }
        }
    },
}

</script>

<template>
    <form id="search"
          method="GET"
          v-bind:action="action">
        <input type="text"
               name="q"
               autofocus="autofocus"
               v-bind:placeholder="placeholder"
               v-model.trim="query"
               v-debounce:200="search">

        <SearchMenu v-show="showMenu" :query="query" />
    </form>
</template>

<style lang="scss" scoped>

div#content form#search {
    width: 400px;
    position: absolute;
    left: calc(50% - 200px);
    top: 50%;
    transform: translateY(-50%);

    $inputBackground: rgba(87, 109, 127, 0.47);
    $inputBoxShadow: rgba(48, 60, 70, 0.8);
    $inputTextColor: rgba(255, 255, 255, 0.8);
    $inputPlaceholderColor: rgba(255, 255, 255, 0.5);

    input[type="text"] {
        width: calc(100% - 40px);
        background: $inputBackground;
        box-shadow: 1px 1px 1px 1px $inputBoxShadow;
        border-radius: 8px;
        color: $inputTextColor;
        padding: 15px 20px;
        font-size: 20px;
        font-family: Arial;
        border: none;
        outline: none;

        &::placeholder {
            color: $inputPlaceholderColor;
        }
    }
}

</style>