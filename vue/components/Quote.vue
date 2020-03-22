<template>
    <div>
        <p class="quote">{{ quote }}</p>
        <p class="author">{{ author }}</p>
    </div>
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
                author: quote[randIndex][1] || 'Unknown'
            };
        }
    }
</script>

<style lang="scss" scoped>

div {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    p {
        font-family: Roboto, Arial, "Times New Roman";
        text-align: center;
    }

    p.quote {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.9);
        font-weight: lighter;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);

        transform: translateY(5px);
        transition: .3s transform ease;
    }

    p.author {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
        font-weight: lighter;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);

        transform: translateY(-7px);
        opacity: 0;
        transition: .3s transform ease, .3s opacity ease;
    }

    div:hover {
        cursor: pointer;

        > p.author {
            transform: translateY(5px);
            opacity: 1;
        }

        > p.quote {
            transform: translateY(0px);
        }
    }
}

</style>