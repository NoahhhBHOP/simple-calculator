let fin = '';
let num1 = '';
let num2 = '';

let add = function(num1,num2) {
    fin = num1 + num2;
    return fin;
}

let subtract = function(num1,num2) {
    fin = num1 - num2;
    return fin;
}

let multiply = function(num1,num2) {
    fin = num1 * num2;
    return fin;
}

let divide = function(num1,num2) {
    fin = num1 / num2;
    return fin;
}

let operate = function(num1,operator,num2) {
    return operator(num1,num2);
}

let backspaceString = function (num1) {
    if (num1.length > 0) {
      return num1.slice(0, -1);
    } else {
      return num1;
    }
  }

let oneButton = document.getElementById('1');
oneButton.addEventListener('click', () => { 
    num1 = num1 + '1';
    input1.textContent = num1;
});

let twoButton = document.getElementById('2');
twoButton.addEventListener('click', () => {
    num1 = num1 + '2';
    input1.textContent = num1;
});

let threeButton = document.getElementById('3');
threeButton.addEventListener('click', () => {
    num1 = num1 + '3';
    input1.textContent = num1;
});

let fourButton = document.getElementById('4');
fourButton.addEventListener('click', () => {
    num1 = num1 + '4';
    input1.textContent = num1;
});

let fiveButton = document.getElementById('5');
fiveButton.addEventListener('click', () => {
    num1 = num1 + '5';
    input1.textContent = num1;
});

let sixButton = document.getElementById('6');
sixButton.addEventListener('click', () => {
    num1 = num1 + '6';
    input1.textContent = num1;
});

let sevenButton = document.getElementById('7');
sevenButton.addEventListener('click', () => {
    num1 = num1 + '7';
    input1.textContent = num1;
});

let eightButton = document.getElementById('8');
eightButton.addEventListener('click', () => {
    num1 = num1 + '8';
    input1.textContent = num1;
});

let nineButton = document.getElementById('9');
nineButton.addEventListener('click', () => {
    num1 = num1 + '9';
    input1.textContent = num1;
});

let zeroButton = document.getElementById('0');
zeroButton.addEventListener('click', () => {
    num1 = num1 + '0';
    input1.textContent = num1;
});

let backspaceButton = document.getElementById('backspace');
backspaceButton.addEventListener('click', () => {
    num1 = backspaceString(num1);
    input1.textContent = num1;
});

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    num1 = '';
    input1.textContent = num1;
});

let divideButton = document.getElementById('divide');

let multiplyButton = document.getElementById('multiply');

let subtractButton = document.getElementById('subtract');

let addButton = document.getElementById('add');

let decimalButton = document.getElementById('decimal');

let equalsButton = document.getElementById('equals');

let input1 = document.getElementById('input1');

let input2 = document.getElementById('input2');