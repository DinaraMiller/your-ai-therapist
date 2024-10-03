function advisor(event) {
  event.preventDefault();

  new Typewriter("#advice", {
    strings:
      "You can't control the situation but you can control your reaction...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let adviceElement = document.querySelector("#advice-generator-form");
adviceElement.addEventListener("submit", advisor);
