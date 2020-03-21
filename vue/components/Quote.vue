<template>
    <div id="quote">{{ quote }}</div>
</template>

<script>
    export default {
        name: 'Quote',
        data() {
            let quote = [
                ["Everyone pities the weak, jealousy you have to earn.", "Arnold Schwarzenegger"],
                ["We judge others by their actions and ourselves by our intentions."],
                ["Give me 6 hours to chop a tree, I will spend the first 4 sharpening my axe.", "Abraham Lincoln"],
                ["Sometimes you never realize the value of a moment until it becomes a memory.", "Dr. Seuss"],
                ["It is the mark of an educated mind, to entertain a thought without accepting it.", "Aristotle"],
                ["A ship in harbor is safe, but that's not why ships are built."],
                ["Nothing of me is original. I am the combined efforts of everyone I've every known.", "Chuck Palahniuk"],
                ["How lucky I am to have something that makes saying goodbye so hard.", "Winnie the Pooh"],
                ["Tact is the ability to tell someone to go to hell in such a way that they look forward to the trip.", "Winston Churchil"],
                ["Every saint has a past, and every sinner has a future.", "Oscar Wilde"],
                ["Stay hungry, stay foolish.", "Steve Jobs"],
            ];
            
            let randIndex = Math.floor(Math.random() * quote.length);

            return {
                quote: '"' + quote[randIndex][0] + '"',
                author: quote[randIndex][1] || undefined
            };
        }
    }
</script>

<style lang="scss">
div#quote {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);

    font-size: 18px;
    font-family: Roboto, Arial, "Times New Roman";
    color: rgba(255, 255, 255, 0.9);
    font-weight: lighter;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
}
</style>