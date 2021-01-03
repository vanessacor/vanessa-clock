"use strict";

const calendarDisplayCountdown = document.getElementById("calendar-countdown");
const clockDisplayCountdown = document.getElementById("clock-countdown");
const feedbackMessageCountdown = document.querySelector(".feedback-message");
const inputDate = document.getElementById("date-countdown");
const startCountdownBtn = document.getElementById("start-countdown");
const stopCountdownBtn = document.getElementById("stop-countdown");

let countdownInterval;

startCountdownBtn.addEventListener("click", handleDateSubmit);
stopCountdownBtn.addEventListener("click", stopCountdown);

function handleDateSubmit(event) {
	event.preventDefault();
	startCountdownBtn.disabled = true;
	const input = inputDate.value;
	const date = new Date(input);
	if (validateCountdownInput(date)) {
		clearFeedbackMessage();
		startCountDown(date);
	} else printCountdownFeedback();
}

function startCountDown(date) {
	const OneSecond = 1000;
	let futureDate = date.getTime();
	countdownInterval = setInterval(() => {
		let countDownTime = getTimeDifference(futureDate);
		printCountdownClock(countDownTime);
	}, OneSecond);
}

function stopCountdown() {
	clearInterval(countdownInterval);
	resetCountDown();
}

function resetCountDown() {
	startCountdownBtn.disabled = false;
	inputDate.value = "";
	calendarDisplayCountdown.innerHTML = "";
	clockDisplayCountdown.innerHTML = "";
}

function validateCountdownInput(date) {
	const todaysDate = new Date();
	if (date.getTime() <= todaysDate.getTime() || date == "Invalid Date") {
		return false;
	} else return true;
}

function printCountdownClock(time) {
	time = formatTime(time);
	calendarDisplayCountdown.innerHTML = `${time.years} years ${time.months} months`;
	const hours = addzeros(time.hours)
	const minutes = addzeros(time.minutes)
	const seconds = addzeros(time.seconds)	
	clockDisplayCountdown.innerHTML = `${time.days} days ${hours} hours ${minutes} min ${seconds} sec`;
}

function printCountdownFeedback() {
  	feedbackMessageCountdown.style.display = "block";
}

function clearFeedbackMessage() {
  	feedbackMessageCountdown.style.display = "none";
}
