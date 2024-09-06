import { Timer } from "./timer.js";

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const timerInput = document.getElementById("timerInput");
const setTimerBtn = document.getElementById("setTimerBtn");

const updateDisplay = (time) => {
  display.textContent = time;
};

const timer = new Timer(updateDisplay);

startBtn.addEventListener("click", () => timer.start());
pauseBtn.addEventListener("click", () => timer.pause());
resetBtn.addEventListener("click", () => timer.reset());
setTimerBtn.addEventListener("click", () => {
  const seconds = parseInt(timerInput.value);
  if (!isNaN(seconds) && seconds > 0) {
    timer.setTimer(seconds);
  } else {
    alert("Por favor, insira um número válido de segundos.");
  }
});
