let fin = '';
let num1 = ''; // num refers to string number
let realNum1 = ''; //realnum refers to number after conversion from string
let num2 = '';
let realNum2 = '';
let operator = '';

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

let backspaceString = function(num1) {
    if (num1.length > 0) {
      return num1.slice(0, -1);
    } else {
      return num1;
    }
  }

let strToNum = function (num1) {
    realNum1 = parseInt(num1);
    return realNum1;
};

let pushDisplay = function(num1, operator) {
 
    if (operator === add) {
        strToNum(num1);
        num2 = realNum1;
        input2.textContent = num2 + ' +';
    }
    else if (operator === subtract) {
        strToNum(num1);
        num2 = realNum1;
        input2.textContent = num2 + ' -';
    }
    else if (operator === multiply) {
        strToNum(num1);
        num2 = realNum1;
        input2.textContent = num2 + ' ×';
    }
    else if (operator === divide) {
        strToNum(num1);
        num2 = realNum1;
        input2.textContent = num2 + ' ÷';
    }
};

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
divideButton.addEventListener('click', () => {
    pushDisplay(num1, divide);
    num1 = '';
    operator = divide;
    input1.textContent = num1;
});

let multiplyButton = document.getElementById('multiply');
multiplyButton.addEventListener('click', () => {
    pushDisplay(num1, multiply);
    num1 = '';
    operator = multiply;
    input1.textContent = num1;
});

let subtractButton = document.getElementById('subtract');
subtractButton.addEventListener('click', () => {
    pushDisplay(num1, subtract);
    num1 = '';
    operator = subtract;
    input1.textContent = num1;
});

let addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
    pushDisplay(num1, add);
    num1 = '';
    operator = add;
    input1.textContent = num1;
});

let decimalButton = document.getElementById('decimal');
decimalButton.addEventListener('click', () => {
    if (num1.indexOf('.') > -1) {
        num1 = num1;
    }
    else num1 = num1 + '.';
    input1.textContent = num1;
});

let equalsButton = document.getElementById('equals');

let input1 = document.getElementById('input1');

let input2 = document.getElementById('input2');