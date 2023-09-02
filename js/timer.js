const refs = {
  daysLeft: document.querySelector('span[data-days]'),
  hoursLeft: document.querySelector('span[data-hours]'),
  minutesLeft: document.querySelector('span[data-minutes]'),
  secondsLeft: document.querySelector('span[data-seconds]'),
};

// Function to find random numbers between two numbers
const getRandomNumbersBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// Function to count delta time period
const countDeltaTimeInMilliseconds = () => {
    const days = getRandomNumbersBetween(10, 30);
    const hours = getRandomNumbersBetween(0, 24);
    const minutes = getRandomNumbersBetween(0, 60);
    const seconds = getRandomNumbersBetween(0, 60);

  //   console.log({ days, hours, minutes, seconds });

//  To check if timer stops at nulls
//   const days = 0;
//   const hours = 0;
//   const minutes = 0;
//   const seconds = 15;

  const deltaTime = 1000 * (seconds + 60 * minutes + 3600 * hours + 3600 * 24 * days);

  //   console.log(deltaTime);

  return deltaTime;
};

// Function to convert milliseconds to days, hours, minutes and seconds
const convertMs = ms => {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  //   console.log({ days, hours, minutes, seconds });

  return { days, hours, minutes, seconds };
};

// Function to add zero before one-digit number

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

// Function to countdown
const timerUpdate = futureDate => {
  const currentDate = Date.now();
  const deltaTime = futureDate - currentDate;

  //   console.log(deltaTime);

  const deltaTimeConverted = convertMs(deltaTime);

  //   console.log(deltaTimeConverted);

  refs.daysLeft.textContent = addLeadingZero(deltaTimeConverted.days);
  refs.hoursLeft.textContent = addLeadingZero(deltaTimeConverted.hours);
  refs.minutesLeft.textContent = addLeadingZero(deltaTimeConverted.minutes);
  refs.secondsLeft.textContent = addLeadingZero(deltaTimeConverted.seconds);

  if (
    deltaTimeConverted.days === 0 &&
    deltaTimeConverted.hours === 0 &&
    deltaTimeConverted.minutes === 0 &&
    deltaTimeConverted.seconds === 0
  ) {
    clearInterval(timerId);
  }
};

// TimerId is defined globally
let timerId = null;

// Dates
const currentDateToStart = Date.now();
const futureDate = currentDateToStart + countDeltaTimeInMilliseconds();

// console.log(currentDateToStart);
// console.log(futureDate);

const handleStart = futureDate => {
  timerId = setInterval(timerUpdate, 1000, futureDate);
};

handleStart(futureDate);
