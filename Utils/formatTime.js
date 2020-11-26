"use strict";

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

function formatTime(date) {
  let dateFormated = {
    weekDay: dayNames[date.getDay()],
    dayOfMonth: date.getDate(),
    month: monthNames[date.getMonth()],
    year: date.getFullYear(),
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };

  return dateFormated;
}
