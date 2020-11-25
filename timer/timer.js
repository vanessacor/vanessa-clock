"use strict";

const format = require("../Utils/formatTime");
const timeDiff = require("../Utils/getTimeDifference");

let interval;

function startTimer(minutes) {
  let startTime = new Date(Date.now());
  let timeTofinish = startTime.setMinutes(startTime.getMinutes() + minutes);
  interval = setInterval(() => {
    let countDownTime = timeDiff.getTimeDifference(timeTofinish);
    countDownTime = format.formatTime(countDownTime);
    console.log(countDownTime);
  }, 1000);
}

startTimer(5);
