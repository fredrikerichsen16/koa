<template>
    <form id="search"
          method="GET"
          v-bind:action="action">
        <input type="text"
               name="q"
               v-bind:placeholder="placeholder"
               autofocus="autofocus">
    </form>
</template>

<script>
    export default {
        name: 'SearchBar',
        data() {
            return {
                searchEngine: 'Google'
            };
        },
        computed: {
            placeholder() {
                return 'Search ' + this.searchEngine + '...';
            },

            /**
             *
             */
            action() {
                if(this.searchEngine === 'Google') {
                    return "https://www.google.com/search";
                }
            }
        }
    }
</script>

<style lang="scss">

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