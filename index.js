'use strict';
const Day = document.querySelector('#Day');
const Month = document.querySelector('#Month');
const Year = document.querySelector('#Year');
const btn = document.querySelector('.btn-body');
const yearsText = document.querySelector('.years-text');
const monthsText = document.querySelector('.months-text');
const daysText = document.querySelector('.days-text');

const dayValue = Day.value;
const monthValue = Month.value;
const yearValue = Year.value;

const ourDate = new Date();
let currentDay = ourDate.getDate();
let currentMonth = ourDate.getMonth() + 1;
let currentYear = ourDate.getFullYear();
let monthsDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// const validate = function () {
//   const inputs = document.querySelectorAll('input-box');
//   let validator = true;
//   inputs.forEach(i => {
//     const parent = i.parentElement;
//     if (!i.value) {
//       i.style.borderColor = 'hsl(0, 100%, 67%)';
//       parentElement.querySelector('.error').innerText =
//         'this field is required.';
//       validator = false;
//     } else if (monthValue > 12) {
//       Month.style.borderColor = 'red';
//       Month.parentElement.querySelector('.error').innerText =
//         'must be a valid month';
//       validator = false;
//     } else if (dayValue > 31) {
//       Day.style.borderColor = 'red';
//       Day.parentElement.querySelector('.error').innerText =
//         'must be a valid month';
//       validator = false;
//     } else {
//       i.style.borderColor = 'black';
//       parentElement.querySelector('.error').innerText = '';
//       validator = true;
//     }
//   });
//   return validator;
// };

// btn.addEventListener('click', function () {
// if (dayValue > currentDay) {
//   currentDay = monthsDates[currentMonth - 1];
//   monthsDates = monthsDates - 1;
//   daysText.textContent = dayValue - currentDay;
// }
// if (monthValue > currentMonth) {
//   monthsText.textContent = monthValue - currentMonth;
// } else {
//   monthsText.textContent = currentMonth - monthValue;
// }
// if (dayValue > currentDay) {
//   yearsText.textContent = yearValue - currentYear;
// } else {
//   yearsText.textContent = currentYear - yearValue;
// }
//   if (validate()) {
//     if (dayValue > currentDay) {
//       currentDay = currentDay + monthsDates[currentMonth - 1];
//       currentMonth = currentMonth - 1;
//     }
//     if (monthValue > currentMonth) {
//       currentMonth = currentMonth + 12;
//       currentYear = currentYear - 1;
//     }
//   }
//   const d = dayValue - currentDay;
//   const m = monthValue - currentMonth;
//   const y = yearValue - currentYear;

//   daysText.textContent = d;
//   monthsText.textContent = m;
//   yearsText.textContent = y;
// });
