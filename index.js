"use strict";

let interval;

function startClock() {
  interval = setInterval(() => {
    let date = new Date(Date.now());

    let today = formatTime(date);
    printClock(today);
  }, 1000);
}

startClock();

window.addEventListener("load", startClock);
