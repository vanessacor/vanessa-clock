"use strict";

const startTimerBtn = document.getElementById("start-timer");
const stopTimerBtn = document.getElementById("stop-timer");
const inputMinutes = document.getElementById("minutes-timer");
const clockDisplayTimer = document.getElementById("clock-timer");

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
  const startMinutes = parseInt(minutes) + 1;
  const miliseconds = startMinutes * 60000;
  let startTime = Date.now() + miliseconds;

  timerInterval = setInterval(() => {
    let countDownTime = getTimeDifference(startTime);
    if (countDownTime < 0) {
      stopTimer();
      return;
    } else countDownTime = formatTime(new Date(countDownTime));
    printTimer(countDownTime);
  }, 1000);
}

function stopTimer(event) {
  event.preventDefault();
  clearInterval(timerInterval);
  resetTimer();
}

function printTimer(time) {
  clockDisplayTimer.innerHTML = `${time.minutes} : ${time.seconds}`;
}

function resetTimer() {
  inputMinutes.value = "";
  clockDisplayTimer.innerHTML = "00 : 00";
}
