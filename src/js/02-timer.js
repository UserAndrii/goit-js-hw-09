import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const TIMER_STEP = 1000;
let timerId = null;
let date = null;
let timeDifference = 0;

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  cleanBtn: document.querySelector('[data-clean]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds ]'),
};

refs.startBtn.disabled = true;
refs.cleanBtn.disabled = true;
refs.startBtn.addEventListener('click', onStartTheTimer);
refs.cleanBtn.addEventListener('click', resetTheTimer);

flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    date = selectedDates[0];
    startBtnActivation();
  },
});

function startBtnActivation() {
  const currentDate = Date.now();
  const selectedDate = new Date(date).getTime();
  if (selectedDate < currentDate) {
    Notiflix.Notify.failure('Please choose a date in the future', {
      timeout: 4000,
    });
    return;
  }
  refs.startBtn.disabled = false;
  timeDifference = selectedDate - currentDate;
}

function onStartTheTimer() {
  refs.startBtn.disabled = true;
  refs.input.disabled = true;
  refs.cleanBtn.disabled = false;

  timerId = setInterval(() => {
    timeDifference -= TIMER_STEP;
    const timeComponents = convertMs(timeDifference);

    if (timeDifference < 0) {
      clearInterval(timerId);
      Notiflix.Notify.success('Did you really make it to the very end? 😉', {
        timeout: 4000,
      });
      refs.input.disabled = false;
      refs.cleanBtn.disabled = true;
      return;
    }

    updateClockface(timeComponents);
  }, TIMER_STEP);
}

function updateClockface(obj) {
  const { days, hours, minutes, seconds } = obj;
  refs.days.textContent = `${addLeadingZero(days)}`;
  refs.hours.textContent = `${addLeadingZero(hours)}`;
  refs.minutes.textContent = `${addLeadingZero(minutes)}`;
  refs.seconds.textContent = `${addLeadingZero(seconds)}`;
}

function resetTheTimer() {
  clearInterval(timerId);
  refs.input.disabled = false;

  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';

  refs.cleanBtn.disabled = true;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
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

  return { days, hours, minutes, seconds };
}
