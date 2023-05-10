'use strict';
//input
const dayInput = document.querySelector('#Day');
const monthInput = document.querySelector('#Month');
const yearInput = document.querySelector('#Year');
const btn = document.querySelector('.btn-body');
//text
const yearsText = document.querySelector('.years-text');
const monthsText = document.querySelector('.months-text');
const daysText = document.querySelector('.days-text');

//errors
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');

let isValid = false;
const currentYear = new Date().getFullYear();

dayInput.addEventListener('input', function (e) {
  if (+dayInput.value > 31) {
    errorDay.textContent = 'Must be a valid date';
    isValid;
    return;
  } else {
    isValid = true;
    errorDay.textContent = '';
  }

  if (+dayInput.value === 0) {
    errorDay.textContent = 'this field is required';
    isValid;
    return;
  } else {
    errorDay.textContent = '';
  }
});

monthInput.addEventListener('input', function (e) {
  if (+monthInput.value > 12) {
    errorMonth.textContent = 'Must be a valid date';
    isValid;
    return;
  } else {
    isValid = true;
    errorMonth.textContent = '';
  }

  if (+monthInput.value === 0) {
    errorMonth.textContent = 'this field is required';
    isValid;
    return;
  } else {
    errorMonth.textContent = '';
  }
});

yearInput.addEventListener('input', function (e) {
  if (+yearInput.value > currentYear) {
    errorYear.textContent = 'Must be a valid date';
    isValid;
    return;
  } else {
    isValid = true;
    errorYear.textContent = '';
  }

  if (+yearInput.value === 0) {
    errorYear.textContent = 'this field is required';
    isValid;
    return;
  } else {
    errorYear.textContent = '';
  }
});

const calculateDate = function () {
  if (isValid) {
    let birthday = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate();
    yearsText.textContent = ageYears;
    monthsText.textContent = ageMonth;
    daysText.textContent = ageDay;
  } else {
    alert('enter an input');
  }
};
btn.addEventListener('click', calculateDate);
