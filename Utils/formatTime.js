"use strict";

function formatTime(time) {
  const oneSecond = 1000;
  const seconds = Math.floor((time / oneSecond) % 60);
  const minutes = Math.floor((time / oneSecond / 60) % 60);
  const hours = Math.floor((time / (oneSecond * 60 * 60)) % 24);
  const days = Math.floor(time / (oneSecond * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  return {
    seconds,
    minutes,
    hours,
    days,
    months,
    years,
  };
}

module.exports = { formatTime };
