const INTERVAL_DELAY = 1000;
let intervalId = null;

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.start.addEventListener('click', randomColorForBody);
refs.stop.addEventListener('click', onStopBtnClick);
refs.stop.disabled = true;

function randomColorForBody() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DELAY);
  refs.start.disabled = true;
  refs.stop.disabled = false;
}

function onStopBtnClick() {
  clearInterval(intervalId);
  refs.start.disabled = false;
  refs.stop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
