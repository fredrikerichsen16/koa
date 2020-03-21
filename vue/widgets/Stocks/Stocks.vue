<script>
export default {
    name: 'Stocks',

    mounted() {
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                let stock = JSON.parse(this.responseText);
                console.log(stock);
            }
        });

        xhr.open("GET", "https://alpha-vantage.p.rapidapi.com/query?symbol=TSLA&function=GLOBAL_QUOTE");
        xhr.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "301b5eb2fcmshebd8323fc79a828p1d45adjsn3a594e967584");

        xhr.send(data);
    }
}
</script>

<template>
    <div>
        <h1>Stocks</h1>
        <p>Buy BitCOIN!</p>
    </div>
</template>

<style lang="scss">

</style>