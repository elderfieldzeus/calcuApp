const operator = ["+", "-", "/", "X", "="];
let answer = document.getElementById("ans");
let number = 0;
let total = 0;

const clear = document.getElementById("clear");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");

let data = [];
let signs = [];

function reset(){
    total = 0;
    number = 0;
    power = 1;
    data.length = 0;
    signs.length = 0;
    answer.textContent = number;
}

let value;

function put(value){
    return function(){
        number = number * 10 + value;
        answer.textContent = number;
    }
}

function operation(op) {
    return function() {
        data.push(number);
        signs.push(op);
        number = 0;
        console.log(data);
    }
}

function solve(){
    data.push(number);
    total = data[0];
    for(let i = 1; i < data.length; i++){
        switch(signs[i-1]){
            case '+':
                total += data[i];
                break;
            case '-':
                total -= data[i];
                break;
            case 'X':
                total *= data[i];
                break;
            case '/':
                total /= data[i];
                break; 
        }
    }
    answer.textContent = total;
    number = total;
    data.length = 0;
    signs.length = 0;
}

clear.addEventListener("click", reset);
one.addEventListener("click", put(1));
two.addEventListener("click", put(2));
three.addEventListener("click", put(3));
four.addEventListener("click", put(4));
five.addEventListener("click", put(5));
six.addEventListener("click", put(6));
seven.addEventListener("click", put(7));
eight.addEventListener("click", put(8));
nine.addEventListener("click", put(9));
zero.addEventListener("click", put(0));
plus.addEventListener("click", operation('+'));
minus.addEventListener("click", operation('-'));
times.addEventListener("click", operation('X'));
divide.addEventListener("click", operation('/'));
equals.addEventListener("click", solve);




    
