const form = document.querySelector("form");
const button = document.querySelector("#generate");
const result = document.querySelector("#result");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const length = document.querySelector("#length").value;
  fetch("/generate-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ length }),
  })
    .then((response) => response.text())
    .then((password) => {
      result.textContent = `Twoje hasło: ${password}`;
    })
    .catch((error) => console.error(error));
});
