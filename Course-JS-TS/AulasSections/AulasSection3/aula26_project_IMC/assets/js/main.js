// Capturar evento de submit do formulário

const form = document.querySelector('#formulario'); // obtendo formulário do nosso index.

// adicionando evento submit ao nosso formulário
form.addEventListener('submit', function (e) { // informando evento do formulário
e.preventDefault();  // previnindo o default pra não deixar este formulário ser enviado
// capturando dados dos inputs
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');

// convertendo input para number
const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

// Setando peso inválido caso o resultado do peso não for verdadeiro
if(!peso) {
    setResultado('Peso inválido', false);
    return;
}
if(!altura){
    setResultado('Altura inválida', false);
    return;
}

/* Criamos a função getImc para executar a função de buscado imc */
const imc = getImc(peso, altura);
/* Pegamos o nível do IMC que é o texto das arrays */
const nivelImc = getNivelImc(imc);

// Mensagem com os valores do IMC e Nível
const msg = `Seu IMC é ${imc} (${nivelImc}).`;
setResultado(msg, true);
});

// Função de busca do Nível de IMC 
function getNivelImc(imc) {
                    // array para obter os VALORES 
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
                   'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];
        if(imc >= 39.9) return nivel[5];   
        if(imc >= 34.9) return nivel[4];   
        if(imc >= 29.9) return nivel[3];   
        if(imc >= 24.9) return nivel[2];   
        if(imc >= 18.5) return nivel[1];   
        if(imc < 18.5)  return nivel[0];
}


function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
    }

    // função de criar parágrafo
function criaP(){
const p = document.createElement('p'); // criando elemento
return p;
}

// setando msg e verificando se é válido
function setResultado(msg, isValid) {
const resultado = document.querySelector('#resultado'); // selecionando div de resultado
resultado.innerHTML = ''; // zera o HTML do resultado 

// criando parágrafo
const p = criaP();
// verificando se é válido para alterar o background-color
if(isValid){ 
     p.classList.add('paragrafo-resultado');
} else {
    p.classList.add('bad');
}

p.innerHTML = msg; // setando msg do inner
resultado.appendChild(p);
}