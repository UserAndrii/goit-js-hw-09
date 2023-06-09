import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};
refs.form.addEventListener('submit', onButtonClick);

function onButtonClick(e) {
  e.preventDefault();
  const delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);
  const amount = Number(e.target.elements.amount.value);
  createMultiplePromises(delay, step, amount);
  e.target.reset();
}

function createMultiplePromises(delay, step, amount) {
  let amoutDelay = delay;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, amoutDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            timeout: 4000,
          }
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            timeout: 4000,
          }
        );
      });
    amoutDelay += step;
    // console.log(amoutDelay);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}
