"use strict";

const weekDay = document.getElementById("weekDay");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function printClock(date) {
  weekDay.innerHTML = date.weekDay;
  day.innerHTML = date.dayOfMonth;
  month.innerHTML = date.month;
  year.innerHTML = date.year;
  hour.innerHTML = date.hour;
  minutes.innerHTML = date.minutes;
  seconds.innerHTML = date.seconds;
}
