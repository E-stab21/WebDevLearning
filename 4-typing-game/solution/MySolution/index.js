/*
Typing game
 */

//globals
let quotes = ["Monkey do do do", "boy boy", "Splat ball"]

const quoteElement = document.getElementById("quote");
const textboxElement = document.getElementById("userinput");

document.getElementById("start").addEventListener('click', function(){
    let quote = quotes[getRandomInt(0, quotes.length - 1)]
    quoteElement.textContent = randQuote;

    let words = quote.split(' ');


})










function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up to the nearest integer
    max = Math.floor(max); // Round down to the nearest integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}