"use strict";

const startTimerBtn = document.getElementById("start-timer");
const stopTimerBtn = document.getElementById("stop-timer");
const inputMinutes = document.getElementById("minutes-timer");
const clockTimer = document.getElementById("clock-timer");

let timerInterval;

startTimerBtn.addEventListener("click", handleSubmit);
stopTimerBtn.addEventListener("click", stopTimer);

function handleSubmit(event) {
  event.preventDefault();
  const minutes = inputMinutes.value;
  if (minutes) {
    startTimer(minutes);
  } else console.log("please insert time");
}

function startTimer(minutes) {
  let startTime = new Date(Date.now());
  let timeTofinish = startTime.setMinutes(startTime.getMinutes() + minutes);
  timerInterval = setInterval(() => {
    let countDownTime = getTimeDifference(timeTofinish);
    if (countDownTime < 0) {
      stopTimer();
      return;
    } else countDownTime = formatTime(new Date(countDownTime));
    printTimer(countDownTime);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function printTimer(date) {
  const clockTimer = document.getElementById("clock-timer");
  clockTimer.innerHTML = `${date.minutes} : ${date.seconds}`;
}
