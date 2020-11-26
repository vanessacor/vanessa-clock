"use strict";

const timeDiff = require("../Utils/getTimeDifference");

let interval;

function startTimer(minutes) {
  let startTime = new Date(Date.now());
  let timeTofinish = startTime.setMinutes(startTime.getMinutes() + minutes);
  interval = setInterval(() => {
    let countDownTime = timeDiff.getTimeDifference(timeTofinish);
    if (countDownTime < 0) {
      stopTimer();
      return;
    } else countDownTime = formatTime(new Date(countDownTime));
    console.log(countDownTime);
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

startTimer(1);
