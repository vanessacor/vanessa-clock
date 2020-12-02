"use strict";
const calendar = document.getElementById("calendar");
const clock = document.getElementById("clock");
  
let interval;

function startClock() {
  const oneSecond = 1000;
  interval = setInterval(() => {
    let date = new Date(Date.now());

    let today = formatDate(date);
    printClock(today);
  }, oneSecond);
}

function stopClock() {
  clearInterval(interval);
}

function printClock(date) {
  calendar.innerHTML = `${date.weekDay}, ${date.dayOfMonth} ${date.month} ${date.year}`;
  clock.innerHTML = `${date.hour} : ${date.minutes} : ${date.seconds}`;
}

window.onload = (event) => {
  console.log("window loaded");
  startClock();
};
