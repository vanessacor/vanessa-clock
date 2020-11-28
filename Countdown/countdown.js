"use strict";

const startCountdownBtn = document.getElementById("start-countdown");
const stopCountdownBtn = document.getElementById("stop-countdown");
const inputDate = document.getElementById("date-countdown");
const calendarCountdown = document.getElementById("calendar-countdown");
const clockCountdown = document.getElementById("clock-countdown");

let countdownInterval;

let mindate = new Date();
mindate = inputDate.min;
startCountdownBtn.addEventListener("click", handleDateSubmit);
stopCountdownBtn.addEventListener("click", stopCountdown);

function handleDateSubmit(event) {
  event.preventDefault();
  const date = inputDate.value;
  if (date) {
    startCountDown(date);
  } else console.log("please insert time");
}

function startCountDown(inputDate) {
  const date = new Date(inputDate);
  let futureDate = date.getTime();
  countdownInterval = setInterval(() => {
    let countDownTime = getTimeDifference(futureDate);

    countDownTime = formatTime(countDownTime);
    printCountdownClock(countDownTime);
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

function printCountdownClock(time) {
  calendarCountdown.innerHTML = `${time.years} years ${time.months} months`;
  clockCountdown.innerHTML = `${time.days} days ${time.minutes} min ${time.seconds} sec`;
}
