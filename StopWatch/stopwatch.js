"use strict";

const startStopwatchBtn = document.getElementById("start-stopwatch");
const stopStopwatchBtn = document.getElementById("stop-stopwatch");
const clockStopwatch = document.getElementById("clock-stopwatch");

startStopwatchBtn.addEventListener("click", startStopwatch);
stopStopwatchBtn.addEventListener("click", stopStopwatch);

let stopwatchInterval;
let elapsedTime = 0;

function startStopwatch() {
  const oneSecond = 1000;
  let time = Date.now();
  let startTime = time - elapsedTime;
  stopwatchInterval = setInterval(() => {
    if (new Date(elapsedTime).getMinutes > 60) {
      stopStopwatch();
    }
    elapsedTime = Date.now() - startTime;
    elapsedTime = formatTime(new Date(elapsedTime));
    printStopwatch(elapsedTime);
  }, oneSecond);
}

function stopStopwatch() {
  elapsedTime = 0;
  clockStopwatch.innerHTML = "00 : 00";
  clearInterval(stopwatchInterval);
}

function printStopwatch(time) {
  clockStopwatch.innerHTML = `${time.minutes} : ${time.seconds}`;
}
