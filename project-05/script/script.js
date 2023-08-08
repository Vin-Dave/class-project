const div = document.querySelector(".time");

setTime = () => {
  let time = 0;
  function timeClosure() {
    time++;

    div.textContent = `${time} sekund`;
  }
  return timeClosure;
};
const y = setTime();

const x = setInterval(y, 100);
