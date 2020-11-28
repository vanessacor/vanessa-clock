"use strict";

let interval;

function startClock() {
  timerInterval = setInterval(() => {
    let date = new Date(Date.now());

    let today = formatDate(date);
    printClock(today);
  }, 1000);
}

function stopClock() {
  clearInterval(interval);
}

function printClock(date) {
  calendar.innerHTML = `${date.weekDay}, ${date.dayOfMonth} ${date.month} ${date.year}`;
  clock.innerHTML = `${date.hour} : ${date.minutes} : ${date.seconds}`;
}

// window.addEventListener("load", startClock);
