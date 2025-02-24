
const nome = 'Marcelo';
const sobrenome = 'Magalhães';
const nomeCompleto = nome + ' ' + sobrenome;
const idade = 26;
const peso = 115; 
const altura = 1.80;
let anoNascimento = 2025 - idade;
let imc = peso / (altura * altura);

console.log(`${nomeCompleto}tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nomeCompleto} nasceu em ${anoNascimento}`);
