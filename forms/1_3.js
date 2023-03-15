let form = document.forms.calculator;
let input1 = form.elements.money;
let input2 = form.elements.months;
let input3 = form.elements.interest;

input1.oninput = calculate;
input2.onchange = calculate;
input3.oninput = calculate;

let greenBlock = document.querySelector('#height-after');
let before = document.getElementById('money-before');
let after = document.getElementById('money-after');

function calculate() {
let initial = input1.value;
let years = input2.value / 12;
let persent = input3.value / 100;

let result = Math.round(initial * (1 + persent * years));

before.textContent = initial;
after.textContent = result;
greenBlock.style.height = result / initial * 100 + 'px';
}