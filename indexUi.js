"use strict";

const calendar = document.getElementById("calendar");
const clock = document.getElementById("clock");

function printClock(date) {
  calendar.innerHTML = `${date.weekDay}, ${date.dayOfMonth} ${date.month} ${date.year}`;
  clock.innerHTML = `${date.hour} : ${date.minutes} : ${date.seconds}`;
}
