"use strict";

let interval;

function startStopWatch() {
  let time = Date.now();
  let elapsedTime = 0;
  let startTime = time - elapsedTime;
  interval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    elapsedTime = formatTime(new Date(elapsedTime));
    console.log(elapsedTime.seconds);
  }, 1000);
}

function stopStopWatch() {
  clearInterval(interval);
}
startStopWatch();
