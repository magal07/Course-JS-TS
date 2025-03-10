// DECLARAÇÃO DE FUNÇÃO (Function hoisting)
// Hoisting = eleva as declarações de funções para o TOPO do JS

falaOi(); // <--- 
function falaOi(){ 
  console.log('Oi');
}

// First-class objects (Objetos de primeira classe) = trata funções como dado
// Function expression 


const souUmDado = function() {
console.log('Sou um dado.')
};

function executaFuncao(funcao) {
  console.log('Vou executar sua função abaixo: ');
  funcao();
}

executaFuncao(souUmDado);

// Arrow function E6 ou superior

const functionArrow = () => {
  console.log('Sou uma => function');
};

functionArrow();

// dentro de um objeto posso ter 1 função

const obj = {
  // falar: function() {
  falar() { // método novo
    console.log('Estou falando...');
  }
};
obj.falar();