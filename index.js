"use strict";
const calendar = document.getElementById("calendar");
const clock = document.getElementById("clock");
const homeScreen = document.getElementById("home-screen");
const servicesScreen = document.getElementById("services-screen");

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

window.onload = (event) => {
  console.log("window loaded");
  startClock();
};
