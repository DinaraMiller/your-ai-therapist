function displayAdvice(response) {
  new Typewriter("#advice", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function advisor(event) {
  event.preventDefault();

  let adviceInput = document.querySelector("#text-input");
  let apiKey = "b15d302eb82b9077a2o5t35a3bcfcf4f";
  let context =
    "You are the most empatic therapist, who always can give a great piece of advice. Your advices are in one sentence, and they are full of wisdom. Please put an appropriate `emojy` at the end of each sentence.";
  let prompt = `User instructions: Generate an advice to the input ${adviceInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAdvice);
}

let adviceElement = document.querySelector("#advice-generator-form");
adviceElement.addEventListener("submit", advisor);
