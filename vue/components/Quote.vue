<template>
    <div id="quote">{{ quote }}</div>
</template>

<script>
    export default {
        name: 'Quote',
        data() {
            let quote = [
                "Everyone pities the weak, jealousy you have to earn. -Arnold Schwarzenegger",
                "We judge others by their actions and ourselves by our intentions.",
                "Give me 6 hours to chop a tree, I will spend the first 4 sharpening my axe. -Abraham Lincoln",
                "Sometimes you never realize the value of a moment until it becomes a memory. -Dr. Seuss",
                "It is the mark of an educated mind, to entertain a thought without accepting it. -Aristotle",
                "A ship in harbor is safe, but that's not why ships are built.",
                "Another flaw in the human character is that everyone wants to build and nobody wants to do maintenance. -Kurt Vonnegut",
                "Nothing of me is original. I am the combined efforts of everyone I've every known. ~Chuck Palahniuk",
                "How lucky I am to have something that makes saying goodbye so hard. ~Winnie the Pooh",
                "Tact is the ability to tell someone to go to hell in such a way that they look forward to the trip. ~Winston Churchil",
                "People will forget what you said. People will forget what you did, But people will never forget how you made them feel. ~Maya Angelou",
                "Every saint has a past, and every sinner has a future –Oscar Wilde",
                "Stay hungry, stay foolish -Steve Jobs"
            ];
            
            let randIndex = Math.floor(Math.random() * quote.length);

            return {
                quote: quote[randIndex]
            };
        }
    }
</script>

<style lang="scss">
div#quote {
    position: absolute;
    top: 11px;
    right: 30px;

    font-size: 14px;
    font-family: Arial, "Times New Roman";
    color: #515151;
    font-weight: 300;
    text-transform: uppercase;
}
</style>