let fin;
let num1;
let num2;

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

let oneButton = document.getElementById('1');
oneButton.addEventListener('click', () => console.log(1))

let twoButton = document.getElementById('2');
twoButton.addEventListener('click', () => console.log(2))

let threeButton = document.getElementById('3');

let fourButton = document.getElementById('4');

let fiveButton = document.getElementById('5');

let sixButton = document.getElementById('6');

let sevenButton = document.getElementById('7');

let eightButton = document.getElementById('8');

let nineButton = document.getElementById('9');

let zeroButton = document.getElementById('0');

let divideButton = document.getElementById('divide');

let multiplyButton = document.getElementById('multiply');

let subtractButton = document.getElementById('subtract');

let addButton = document.getElementById('add');

let decimalButton = document.getElementById('decimal');

let equalsButton = document.getElementById('equals');