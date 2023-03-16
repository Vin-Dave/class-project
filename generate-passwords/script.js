const form = document.querySelector("form");
const passwordOutput = document.querySelector("#password");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "@#$%";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const passwordLength = document.querySelector("#length").value;
  const includeLowercase = document.querySelector("#lowercase").checked;
  const includeUppercase = document.querySelector("#uppercase").checked;
  const includeNumbers = document.querySelector("#numbers").checked;
  const includeSymbols = document.querySelector("#symbols").checked;

  const selectedChars = [];

  if (includeLowercase) {
    selectedChars.push(...lowercaseChars);
  }

  if (includeUppercase) {
    selectedChars.push(...uppercaseChars);
  }

  if (includeNumbers) {
    selectedChars.push(...numberChars);
  }
  if (includeSymbols) {
    selectedChars.push(...symbolChars);
  }

  if (selectedChars.length === 0) {
    passwordOutput.innerText = "Musisz wybrać przynajmniej jeden rodzaj znaków";
    return;
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars[randomIndex];
  }

  passwordOutput.innerText = password;
});
