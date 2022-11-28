//  <body>
//     <p><a href="index.html">Go back</a></p>

//     <button type="button" data-start>Start</button>
//     <button type="button" data-stop>Stop</button>
let bodyRef = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    bodyRef.style.backgroundColor = randomColor;
    startBtn.disabled = true;
    console.log('color');
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
});
