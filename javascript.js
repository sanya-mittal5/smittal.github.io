var quotes = [
'you are amazing',
'i adore you',
'you are beautiful',
'im so happy youre mine',
'to the ends of the universe',
'youre adorable',
'youre cute'
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}