"use strict";

const calendar = document.getElementById("calendar");
const clock = document.getElementById("clock");
const homeScreen = document.getElementById("home-screen");
const timerScreen = document.getElementById("timer-screen");
const stopwatchScreen = document.getElementById("stopwatch-screen");
const countdownScreen = document.getElementById("countdown-screen");
const servicesScreen = document.getElementById("services-screen");

const timerBtn = document.getElementById("timer-btn");
const countdownBtn = document.getElementById("countdown-btn");
const stopwatchBtn = document.getElementById("stopwatch-btn");

timerBtn.addEventListener("click", showtimerScreen);
countdownBtn.addEventListener("click", showCountdownScreen);
stopwatchBtn.addEventListener("click", showStopwatchScreen);


function showtimerScreen() {
  disableHomeScreen();
  disableStopwatchScreen();
  disableCountdownScreen();
  timerScreen.style.display = "block";
}

function showStopwatchScreen() {
  disableHomeScreen();
  disableCountdownScreen();
  disableTimerScreen();
  stopwatchScreen.style.display = "block";
}

function showCountdownScreen() {
  disableHomeScreen();
  disableStopwatchScreen();
  disableTimerScreen();
  countdownScreen.style.display = "block";
}

function disableHomeScreen() {
  stopClock();
  homeScreen.style.display = "none";
}

function disableTimerScreen() {
  stopTimer();
  timerScreen.style.display = "none";
}

function disableStopwatchScreen() {
  stopStopwatch();
  stopwatchScreen.style.display = "none";
}

function disableCountdownScreen() {
  stopCountdown();
  countdownScreen.style.display = "none";
}
