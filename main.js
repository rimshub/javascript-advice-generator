const btn = document.getElementById('diceBtn')
const adviceId = document.getElementById("adviceId");
const text = document.getElementById('adviceText')

btn.addEventListener('click', () => {
  fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    const advice = data.slip.id;
    const adviceText = data.slip.advice;
    // advice id
    adviceId.innerHTML = "Advice # " + advice;
    // advice text
    text.innerHTML = "\""+adviceText+"\"";
  })
  .catch((error) => console.error("FETCH ERROR:", error));
})
