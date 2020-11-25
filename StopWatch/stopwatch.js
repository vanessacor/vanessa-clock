"use strict";

const format = require("../Utils/formatTime");

let interval;

function startStopWatch() {
  let time = Date.now();
  console.log(time);
  let elapsedTime = 0;
  let startTime = time - elapsedTime;
  interval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    console.log(elapsedTime);
    elapsedTime = format.formatTime(elapsedTime);
    console.log(elapsedTime.seconds);
  }, 1000);
}

function stopStopWatch() {
  clearInterval(interval);
}
startStopWatch();
