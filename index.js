"use strict";
let interval;

function today() {
  interval = setInterval(() => {
    let date = new Date(Date.now());

    let today = {
      weekDay: dayNames[date.getDay()],
      dayOfMonth: date.getDate(),
      month: monthNames[date.getMonth()],
      year: date.getFullYear(),
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
    printClock(today);
  }, 1000);
}

today();

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

window.addEventListener("load", today);
