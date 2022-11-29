{
  /* <input type="text" id="datetime-picker" />
<button type="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div> */
}
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  inputField: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysInput: document.querySelector('[data-days]'),
  hoursInput: document.querySelector('[data-hours]'),
  minutesInput: document.querySelector('[data-minutes]'),
  secondsInput: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const timerDeadline = selectedDates[0].getTime();
    const delta = timerDeadline - Date.now();
    if (delta <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startBtn.disabled = true;
      return;
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

let calendar = flatpickr(refs.inputField, options);
let intervalId = null;

refs.startBtn.addEventListener('click', countDown);
function countDown() {
  clearInterval(intervalId);
  const startTime = calendar.selectedDates[0].getTime();

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const delta = startTime - currentTime;

    if (delta < 0) {
      clearInterval(intervalId);
      return;
    }

    const time = convertMs(delta);
    console.log('Countdown time object', time);
  }, 1000);

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );
    refs.daysInput.textContent = `${days}`;
    refs.hoursInput.textContent = `${hours}`;
    refs.minutesInput.textContent = `${minutes}`;
    refs.secondsInput.textContent = `${seconds}`;
    console.log('time counting', days, hours, minutes, seconds);
    return { days, hours, minutes, seconds };
  }
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}
