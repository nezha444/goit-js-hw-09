const submit = document.querySelector('[type="submit"]')
const delay = document.querySelector('[name="delay"]')
const step = document.querySelector('[name="step"]')
const amount = document.querySelector('[name="amount"]')

submit.addEventListener('submit', interval)

const interval = setInterval(
  //                      номер     задержка
  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill 
    } else {
      // Reject
    }
//  кол. вызовов
},1000);

