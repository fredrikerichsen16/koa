<script>
    export default {
        name: 'WeatherToday'
    }
</script>

<template>
    <div id="weather_today">
        <h1>Weather</h1>
        <span
                data-wenk="News Digest"
                data-wenk-pos="right">24 degrees today bro!</span>
    </div>
</template>

<style lang="scss" scoped>

div#weather_today {
    height: 300px;
    width: 550px;
    border-radius: 20px;
    padding: 10px 0;
    background: linear-gradient(-45deg, rgba(150, 150, 150, 0.4), rgba(87, 109, 127, 0.3));
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

</style>