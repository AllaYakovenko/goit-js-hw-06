let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const span = document.querySelector('#value');

const increment = () => {
  counterValue += 1
  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1
  document.getElementById('value').textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

console.log(counterValue);
console.log(incrementBtn);
console.log(decrementBtn);