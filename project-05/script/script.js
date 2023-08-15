const btnAdd = document.querySelector("form");
const ulList = document.querySelector("ul");
const incrementSpan = document.querySelector("span");
const input = document.querySelector("input");
const x = document.getElementsByClassName("task");
const toDoList = [];
function licznik() {
  incrementSpan.textContent = x.length;
}

const removeTask = (x) => {
  const index = x.target.parentNode.dataset.key;
  toDoList.splice(index, 1);

  console.log(toDoList);
  licznik();
  ulList.textContent = "";
  toDoList.forEach((doElement, indexKey) => {
    doElement.dataset.key = indexKey;
    ulList.append(doElement);
    doElement.dataset.key = indexKey;
  });
};

const addTasks = (e) => {
  e.preventDefault();
  const addTask = input.value;
  if (!input.value) return;
  const liList = document.createElement("li");
  liList.className = "task";
  liList.innerHTML = `${addTask}<button>Usuń</button>`;
  toDoList.push(liList);
  ulList.textContent = "";
  toDoList.forEach((doElement, indexKey) => {
    doElement.dataset.key = indexKey;
    ulList.append(doElement);
    doElement.dataset.key = indexKey;
  });
  licznik();
  ulList.append(liList);
  liList.addEventListener("click", removeTask);
};

btnAdd.addEventListener("submit", addTasks);
