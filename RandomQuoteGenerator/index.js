const generateButton = document.querySelector('button');
let Quote = document.getElementById('Quote');

let quotesArray = [
    "I am not here to be perfect, I'm here to be real.",
    "I am not interested in money. I just want to be wonderful.",
    "The only thing that feels better than winning is winning when nobody thought you could." ,
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "If you can dream it, you can do it.",
    "If you want something done, ask a busy person to do it." ,
    "If your actions inspire others to dream more, learn more, do more and become more, you are a leader." ,
    "The best way to find out if you can trust somebody is to trust them.",
    "The only Limit to our realization of tomorrow will be our doubts of today.",
    "We may encounter many defeats but we must not be defeated."
]

// const generateQuote = () => {
    generateButton.addEventListener('click', () => {
        let randomNumber = Math.floor(Math.random() * quotesArray.length);
        let randomQuote = quotesArray[randomNumber];
        Quote.innerText = randomQuote;
    })
// }