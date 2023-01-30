let num1 = prompt("Digite um numero de 0 a 10");
let num2 = prompt("Digite mais um numero de 0 a 10");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

alert(
  "O resultado das operações é: " +
    "\nAdição: " +
    soma +
    "\nSubtração: " +
    sub +
    "\nMultiplicação: " +
    mult +
    "\nDivisão: " +
    div
);
