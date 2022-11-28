{
  /* <form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>; */
}
import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', startPromise);

function startPromise(evt) {
  evt.preventDefault();
  let { delay } = evt.target.elements;
  const { step } = evt.target.elements;
  const { amount } = evt.target.elements;
  let dataObj = {
    delay: delay.value,
    step: step.value,
    amount: amount.value,
  };
  console.log(dataObj);
  let position = 0;

  for (let i = 1; i <= dataObj.amount; i += 1) {
    position = i;

    const initialDelay = dataObj.delay;
    let newDelay = (dataObj.delay += dataObj.step);

    createPromise(position, initialDelay, newDelay)
      .then(({ position, newDelay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${newDelay}ms`
          );
        }, newDelay);
      })
      .catch(({ position, newDelay }) => {
        setTimeout(() => {
          Notiflix.Notify.warning(
            `❌ Rejected promise ${position} in ${newDelay}ms`
          );
        }, newDelay);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      return resolve({ position, delay });
    } else {
      return reject({ position, delay });
    }
  });
}
