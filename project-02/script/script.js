const fontUp = document.querySelector(".sizeUp");
const fontDown = document.querySelector(".sizeDown");
const fontColor = document.querySelector(".color");
const paragraf = document.querySelector("p");
let size = 20;

const sizeUpFunction = () => {
  if (size < 70) {
    paragraf.style.fontSize = `${size}px`;
    size++;
  } else {
    return;
  }
};

const sizeDownFunction = () => {
  if (size > 10) {
    paragraf.style.fontSize = `${size}px`;
    size--;
  } else {
    return;
  }
};

const colorFunction = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  paragraf.style.color = `rgb(${r},${g},${b})`;
};

fontUp.addEventListener("click", sizeUpFunction);
fontDown.addEventListener("click", sizeDownFunction);
fontColor.addEventListener("click", colorFunction);
