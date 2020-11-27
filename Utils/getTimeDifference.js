"use strict";

function getTimeDifference(date) {
  const futureDate = date;
  const todayDate = Date.now();
  return futureDate - todayDate;
}
