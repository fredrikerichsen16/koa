<script>
    export default {
        name: 'SavedWebsites'
    }
</script>

<template>
<div id="saved_websites">
    <div class="list">
        <a>
            <div>
                <img src="https://icons.duckduckgo.com/ip3/www.facebook.com.ico">
            </div>
            <p>Facebook</p>
        </a>
        <a>
            <div>
                <img src="https://icons.duckduckgo.com/ip3/www.google.com.ico">
            </div>
            <p>Google</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/youtube.png">
            </div>
            <p>Netflix</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/instagram.png">
            </div>
            <p>Instagram</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/facebook.png">
            </div>
            <p>Reddit</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/google.png">
            </div>
            <p>Codepen</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/youtube.png">
            </div>
            <p>StackOverflow</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/instagram.png">
            </div>
            <p>YouTube</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/facebook.png">
            </div>
            <p>Facebook</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/google.png">
            </div>
            <p>Google</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/facebook.png">
            </div>
            <p>Netflix</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/instagram.png">
            </div>
            <p>Instagram</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/facebook.png">
            </div>
            <p>Reddit</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/google.png">
            </div>
            <p>Codepen</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/facebook.png">
            </div>
            <p>StackOverflow</p>
        </a>
        <a>
            <div>
                <img src="img/favicons/youtube.png">
            </div>
            <p>YouTube</p>
        </a>
    </div>
</div>

</template>

<style lang="scss" scoped>

div#saved_websites {
    max-height: 400px;
    width: 550px;
    border-radius: 20px;
    overflow-y: scroll;
    padding: 10px 0;
    background: linear-gradient(-45deg, rgba(150, 150, 150, 0.4), rgba(87, 109, 127, 0.3));
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 0 3px rgba(50, 50, 50, 0.8);
}

div.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

div.list > a {
    height: 100px;
    width: 100px;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 8px;
    display: inline-block;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    transition: background-color .2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
    }

    > div {
        height: 56px;
        width: 56px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        margin: 0 auto;

        > img {
            height: 40px;
            width: 40px;
            margin-top: 8px;
            margin-left: 8px;
        }
    }

    > p {
        font-family: Roboto, Arial;
        font-size: 12px;
        font-weight: lighter;
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
        margin-top: 8px;
    }
}

</style>