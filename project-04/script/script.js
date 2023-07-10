const day = document.querySelector(".current-day");
const fact = document.querySelector(".fun-fact");
const list = ["aaaaaaa", "bbbbbb", "ccccS"];
const dayNow = new Date();
const actDay = () => {
  day.textContent = dayNow.toLocaleString("pl", { weekday: "long" });
};

const randomText = () => {
  let number = Math.floor(Math.random() * (list.length - 1));
  console.log(number);
  fact.textContent = list[number];
};

actDay();
randomText();
