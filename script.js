'use strict';

const execution = document.getElementById('execution');
const fizzBuzzList = document.getElementById('fizzBuzzList');

const addLiElement = text => {
  const newLi = document.createElement('li');
  const newText = document.createTextNode(text);
  newLi.appendChild(newText);
  fizzBuzzList.insertAdjacentElement('beforeend', newLi);
};

execution.addEventListener('click', () => {
  const fizzNum = Number(document.getElementById('fizzNum').value);
  const buzzNum = Number(document.getElementById('buzzNum').value);

  if (
    Number.isInteger(fizzNum) &&
    Number.isInteger(buzzNum) &&
    fizzNum &&
    buzzNum
  ) {
    fizzBuzzList.innerHTML = '';
    for (let i = 1; i < 100; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        addLiElement(`FizzBuzz ${i}`);
      } else if (i % fizzNum === 0) {
        addLiElement(`Fizz ${i}`);
      } else if (i % buzzNum === 0) {
        addLiElement(`Buzz ${i}`);
      }
    }
  } else {
    fizzBuzzList.innerHTML = '';
    addLiElement('整数値を入力してください');
  }
});
