function generateFilmQuote(event) {
  event.preventDefault();

  let filmQuoteActual = document.querySelector("#film-quote-actual");

  new Typewriter("#film-quote-actual", {
    strings: "blah blah",
    autoStart: true,
    delay: 1,
  });
}

let filmQuoteElement = document.querySelector("#film-quote-form");
filmQuoteElement.addEventListener("submit", generateFilmQuote);
