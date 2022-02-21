'use strict';

const execution = document.getElementById('execution');
const output = document.getElementById('output');

const addElement = text => {
  const newDiv = document.createElement('div');
  const newText = document.createTextNode(text);
  newDiv.appendChild(newText);
  output.insertAdjacentElement('beforeend', newDiv);
};

const overWriteBlank = element => {
  element.innerHTML = '';
};

execution.addEventListener('click', () => {
  const fizzNum = Number(document.getElementById('fizzNum').value);
  const buzzNum = Number(document.getElementById('buzzNum').value);

  if (Number.isInteger(fizzNum) && Number.isInteger(buzzNum)) {
    overWriteBlank(output);
    for (let i = 1; i < 100; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        addElement(`FizzBuzz ${i}`);
      } else if (i % fizzNum === 0) {
        addElement(`Fizz ${i}`);
      } else if (i % buzzNum === 0) {
        addElement(`Buzz ${i}`);
      }
    }
  } else if (!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum)) {
    overWriteBlank(output);
    addElement('整数値を入力してください');
  }
});
