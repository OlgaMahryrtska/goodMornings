"use strict";

let sayGreetings = function () {
  let weekdays = new Array();
  weekdays[0] = "Воскресенье";
  weekdays[1] = " Понедельник";
  weekdays[3] = " Вторник";
  weekdays[4] = " Среда ";
  weekdays[5] = " Четврег";
  weekdays[6] = " Пятница";
  weekdays[7] = " Суббота";
  let h4 = document.createElement("h2");
  const p = document.createElement("p");
  let h = document.createElement("h3");
  let h2 = document.createElement("h2");
  p.className = "active";
  let today = new Date();
  let day = new Date().getHours();
  let td = new Date().getTime();
  let newYear = new Date("01 january 2022").getTime();
  let diff = (newYear - td) / 1000;
  let diffInDays = Math.floor(diff / 60 / 60 / 24);
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let pmAm = hours > 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let morning = " Доброе утро";
  let afternoon = " Добрый день";
  let evening = " Добрый вечер";
  let night = " Доброй ночи";
  let wk = weekdays[today.getDay()];
  p.textContent = "Сегодня: " + wk;
  if (day >= 0 && day < 12) {
    h4.textContent = morning;
  } else if (day > 12 && day < 17) {
    h4.textContent = afternoon;
  } else if (day > 17 && day < 21) {
    h4.textContent = evening;
  } else {
    h4.textContent = night;
  }
  document.body.appendChild(h4);
  document.body.appendChild(p);
  h.textContent =
    " Текущее время: " + hours + ":" + minutes + ":" + seconds + " " + pmAm;
  document.body.appendChild(h);
  h2.textContent = " До нового года осталось: " + diffInDays + " дней";
  document.body.appendChild(h2);
};
sayGreetings();
