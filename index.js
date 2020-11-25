"use strict";
let interval;

function today() {
  interval = setInterval(() => {
    let time = new Date(Date.now());

    let now = {
      weekDay: dayNames[time.getDay()],
      dayOfMonth: time.getDate(),
      month: monthNames[time.getMonth()],
      year: time.getFullYear(),
      hour: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
    };
    return now;
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
