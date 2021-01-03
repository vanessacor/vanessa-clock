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

function formatDate(time) {
  let dateFormated = {
    weekDay: dayNames[time.getDay()],
    dayOfMonth: time.getDate(),
    month: monthNames[time.getMonth()],
    year: time.getFullYear(),
    hour: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };

  return dateFormated;
}

function formatTime(date) {
  const days = Math.floor(date / (1000 * 60 * 60 * 24));
  const hours = Math.floor(date / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(date / 1000 / 60) % 60;
  const seconds = Math.floor(date / 1000) % 60;
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  const timeFormated = { years, months, days, hours, minutes, seconds };
  return timeFormated;
}

function addzeros(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}
