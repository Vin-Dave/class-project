const liList = document.querySelectorAll("li");
const number = 5;

console.log(liList);
for (let i = 0; i < 10; i++) {
  liList.textContent = number;
}

for (let i = 0; i < liList.length; i++) {
  liList[i].textContent = number;
  liList[i].dataset.id = number;
  liList[i].dataset.numberSet = number;
}
