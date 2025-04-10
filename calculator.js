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
