<script>

import { mapState, mapMutations } from 'vuex';

export default {
    components: {
        SearchMenu: () => import('./SearchMenu.vue')
    },

    name: 'SearchBar',

    data() {
        return {
            searchEngine: 'Google',
            queryInput: '',
            query: '',
            showMenu: false,
            showMenuFirstTime: false,
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
        },

        ...mapState(['magicSearchPosition'])
    },

    methods: {
        ...mapMutations(['CHANGE_MAGIC_SEARCH_POSITION']),

        search() {
            this.query = this.queryInput;

            if(this.queryInput === '') {
                this.showMenu = false;
            } else {
                this.showMenu = true;
                this.showMenuFirstTime = true;
            }
        },

        selectDown() {
            this.CHANGE_MAGIC_SEARCH_POSITION(this.magicSearchPosition + 1);
        },

        selectUp(e) {
            if (this.magicSearchPosition < 1) return;
            this.CHANGE_MAGIC_SEARCH_POSITION(this.magicSearchPosition - 1);
            e.preventDefault();
        },

        focusInput() {
            this.CHANGE_MAGIC_SEARCH_POSITION(0);

            if(this.query !== '') {
                this.showMenu = true;
            }
        },

        blurInput() {
            this.showMenu = false;
            this.CHANGE_MAGIC_SEARCH_POSITION(0);
        },

        onFormSubmit(e) {
            if(this.magicSearchPosition != 0) {
                e.preventDefault();
            }

            if(this.magicSearchPosition == 2) {
                location.href = 'https://www.google.com';
            }

            if(this.magicSearchPosition == 3) {
                location.href = 'https://www.google.com/maps';
            }
        }
    },
}

</script>

<template>
    <form id="search"
          method="GET"
          v-bind:action="action"
          @submit="onFormSubmit($event)">
        <input type="text"
               id="magic_search_input"
               name="q"
               autofocus="autofocus"
               v-bind:placeholder="placeholder"
               v-model.trim="queryInput"
               v-debounce:500="search"
               @focus="focusInput"
               @blur="blurInput"
               v-on:keyup.down="selectDown"
               v-on:keydown.up="selectUp($event)">

        <transition name="toggle-menu" mode="out-in">
            <SearchMenu v-if="showMenuFirstTime"
                        v-show="showMenu"
                        :query="query" />
        </transition>
    </form>
</template>

<style lang="scss" scoped>

div#content form#search {
    width: 400px;

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
        font-family: Roboto, Arial;
        border: none;
        outline: none;

        &::placeholder {
            color: $inputPlaceholderColor;
            font-family: Roboto, Arial;
        }
    }
}

</style>