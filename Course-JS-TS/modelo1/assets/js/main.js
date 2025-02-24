// Capturar evento de submit do formulário

const form = document.querySelector('#formulario'); // setando formulário

form.addEventListener('submit', function (e) { // informando evento do formulário
e.preventDefault(); 
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if(!peso) {
    setResultado('Peso inválido', false);
    return;
}
if(!altura){
    setResultado('Altura inválida', false);
    return;
}

console.log('Cheguei aqui..');

});

function criaP(className){
const p = document.createElement('p'); // criando elemento
return p;
}

function setResultado(msg, isValid) {
const resultado = document.querySelector('#resultado');
resultado.innerHTML = '';

const p = criaP();
p.innerHTML = msg;
resultado.appendChild(p);

}