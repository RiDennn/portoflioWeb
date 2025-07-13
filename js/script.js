let quoteBack = document.getElementById("quoteBack");
let quoteNext = document.getElementById("quoteNext");
let quoteText = document.getElementById("quoteText");
let quoteAuthor = document.getElementById("quoteAuthor");
let quotePosition = document.getElementById("quotePosition");
let quotePhoto = document.getElementById("quotePhoto");

function handleQuoteNext() {
    quoteBack.style.fontSize = "100px";
    quoteBack.style.opacity = "1";
    quoteBack.style.color = "#f8e7a1";

    quoteNext.style.fontSize = "70px";
    quoteNext.style.opacity = "0.5";
    quoteNext.style.color = "#ffffff";

    quoteText.innerHTML = "The only limit to our realization of tomorrow is our doubts of today.";
    quoteAuthor.innerHTML = "Franklin D. Roosevelt";
    quotePosition.innerHTML = "32nd President of the United States";

    quotePhoto.src = "image/designquote2.jpg";
}

function handleQuoteBack() {
    quoteBack.style.fontSize = "70px";
    quoteBack.style.opacity = "0.5";
    quoteBack.style.color = "#ffffff";

    quoteNext.style.fontSize = "100px";
    quoteNext.style.opacity = "1";
    quoteNext.style.color = "#f8e7a1";

    quoteText.innerHTML = "Design is not just what it looks like and feels like. Design is how it works.";
    quoteAuthor.innerHTML = "Steve Jobs";
    quotePosition.innerHTML = "CEO Apple";

    quotePhoto.src = "image/designquote.jpg";
}