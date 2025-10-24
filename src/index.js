function displayFilmQuote(response) {
  new Typewriter("#film-quote-actual", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFilmQuote(event) {
  event.preventDefault();

  let instructions = document.querySelector("#user-instructions");
  let apiKey = "359oa204a337et1ba70bbe4fd2e2f596";
  let context =
    "You are a film expert that knows quotes from lots of films. Your mission is to generate just the well-known quote from the chosen film. Make sure the follow user instructions";
  let prompt = `User instructions: Generate a film quote from ${instructions.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteHidden = document.querySelector("#film-quote-actual");
  quoteHidden.classList.remove("hidden");
  quoteHidden.innerHTML = "💬 Generating...";
  axios.get(apiUrl).then(displayFilmQuote);
}

let filmQuoteElement = document.querySelector("#film-quote-form");
filmQuoteElement.addEventListener("submit", generateFilmQuote);

apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
