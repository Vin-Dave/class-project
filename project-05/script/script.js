const rotateBtn = document.querySelector(".addbtn");
const sqrDiv = document.querySelector(".square");

const addBtnFc = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square");
  sqrDiv.appendChild(newDiv);
  console.log("dodano");
};

rotateBtn.addEventListener("click", addBtnFc);
