const item1 = document.querySelector(".item1");
const btn = document.querySelector(".arrow");
const arrow = document.querySelector(".fas");

const showImage = () => {
  item1.classList.toggle("hide");

  item1.classList.contains("hide")
    ? (arrow.style.transform = "rotate(180deg)")
    : (arrow.style.transform = "rotate(0)");
};

btn.addEventListener("click", showImage);
