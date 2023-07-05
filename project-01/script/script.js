const circles = document.querySelectorAll(".circle");
const lime = document.querySelector(".lime");
const blue = document.querySelector("blue");
const gold = document.querySelector(".gold");
const div = document.createElement("div");

circles.forEach((circle) =>
  circle.addEventListener("click", () => console.log(circle))
);
div.classList.add("purple");
gold.appendChild(div);
