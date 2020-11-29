"use strict";

const inputMinutes = document.getElementById("minutes-timer");
const clockDisplayTimer = document.getElementById("clock-timer");
const feedbackMessageTimer = document.getElementById("feedback-msg-timer");
const startTimerBtn = document.getElementById("start-timer");
const stopTimerBtn = document.getElementById("stop-timer");

let timerInterval;

startTimerBtn.addEventListener("click", handleSubmit);
stopTimerBtn.addEventListener("click", stopTimer);

function handleSubmit(event) {
  event.preventDefault();
  const minutes = inputMinutes.value;
  if (validateTimerInput(minutes)) {
    startTimer(minutes);
  } else printFeedbackTimer();
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

function stopTimer() {
  clearInterval(timerInterval);
  resetTimer();
}

function validateTimerInput(input) {
  if (input <= 0 || input > 60 || input == null) {
    return false;
  } else return true;
}

function resetTimer() {
  inputMinutes.value = "";
  clockDisplayTimer.innerHTML = "00 : 00";
}

function printTimer(time) {
  clockDisplayTimer.innerHTML = `${time.minutes} : ${time.seconds}`;
}

function printFeedbackTimer() {
  feedbackMessageTimer.innerHTML = "Please insert minutes";
}
