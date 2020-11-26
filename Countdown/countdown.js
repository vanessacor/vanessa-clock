"use strict";

const timeDifference = require("../Utils/getTimeDifference");

let interval;

function startCountDown(date) {
  let futureDate = new Date(date);
  interval = setInterval(() => {
    let countDownTime = timeDifference.getTimeDifference(futureDate);

    countDownTime = formatTime(new Date(countDownTime));
    console.log(countDownTime);
  }, 1000);
}

startCountDown("Fri, 25 Nov 2027 03:04:05");
