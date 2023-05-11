'use strict';
//input
const dayInput = document.querySelector('#Day');
const monthInput = document.querySelector('#Month');
const yearInput = document.querySelector('#Year');
const btn = document.querySelector('.btn-body');
const labelDay = document.querySelector('.dayLabel');
const labelMonth = document.querySelector('.monthLabel');
const labelYear = document.querySelector('.yearLabel');
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
    errorDay.textContent = 'Must be a valid day';
    dayInput.style.border = '1px solid red';
    labelDay.style.color = 'red';
    isValid;
    return;
  } else {
    isValid = true;
    errorDay.textContent = '';
    labelDay.style.color = '';
    dayInput.style.border = '';
  }

  if (+dayInput.value === 0) {
    errorDay.textContent = 'this field is required';
    dayInput.style.border = '1px solid red';
    labelDay.style.color = 'red';
    isValid;
    return;
  } else {
    errorDay.textContent = '';
    labelDay.style.color = '';
    dayInput.style.border = '';
  }
});

monthInput.addEventListener('input', function (e) {
  if (+monthInput.value > 12) {
    errorMonth.textContent = 'Must be a valid Month';
    monthInput.style.border = '1px solid red';
    labelMonth.style.color = 'red';
    isValid;
    return;
  } else {
    isValid = true;
    errorMonth.textContent = '';
    monthInput.style.border = '';
    labelMonth.style.color = '';
  }

  if (+monthInput.value === 0) {
    errorMonth.textContent = 'this field is required';
    monthInput.style.border = '1px solid red';
    labelMonth.style.color = 'red';

    return;
  } else {
    errorMonth.textContent = '';
    monthInput.style.border = '';
    labelMonth.style.color = '';
  }
});

yearInput.addEventListener('input', function (e) {
  if (+yearInput.value > currentYear) {
    errorYear.textContent = 'Must be in the past';
    yearInput.style.border = '1px solid red';
    labelYear.style.color = 'red';
    isValid;
    return;
  } else {
    isValid = true;
    errorYear.textContent = '';
    yearInput.style.border = '';
    labelYear.style.color = '';
  }

  if (+yearInput.value === 0) {
    errorYear.textContent = 'this field is required';
    yearInput.style.border = '1px solid red';
    labelYear.style.color = 'red';
    isValid;
    return;
  } else {
    errorYear.textContent = '';
    yearInput.style.border = '';
    labelYear.style.color = '';
  }
});

const calculateDate = function () {
  if (isValid) {
    let birthday = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
    // console.log(birthday);
    let birthdayObj = new Date(birthday);
    // console.log(birthdayObj);
    // console.log(Date.now());
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
