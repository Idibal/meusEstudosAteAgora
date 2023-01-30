let firstName = prompt("Insira seu nome");
let lastName = prompt("Insira seu sobrenome");
let study = prompt("Insira seu local de estudo");
let yearBirth = prompt("Insira seu ano de nascimento");

let date = new Date();
let year = date.getFullYear();

let ageRecruit = year - yearBirth;

alert(
  "Bem vindo\n" +
    firstName +
    " " +
    lastName +
    "\nSua area de estudos é: " +
    study +
    "\nSua idade é de: " +
    ageRecruit
);
