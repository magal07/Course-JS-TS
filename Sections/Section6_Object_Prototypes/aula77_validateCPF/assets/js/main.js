// /* 705.484.450-52 070.987.720-03

// 7x  0x  5x  4x  8x  4x  4x  5x  0x
// 10  9    8  7   6    5   4   3  2

// 11 0 (237 % 11) = 5 (Primary digit)
// If the number digit is greater than 9, we consider 0. 

// 7x  0x  5x  4x  8x  4x  4x  5x  0x  5x 
// 11  10  9   8   7   6   5    4   3   2
// 77   0  45  32  56  24  20   20  0   10 = 284

// 11 - (284 % 11) = 2 (Primary digit)
// If the number digit is greater than 9, we consider 0.
// */

// function ValidateCPF(cpfSent) {
//   Object.defineProperty(this, 'cpfClear', {
//     enumerable: true,
//     get: function() {
//       return cpfSent.replace(/\D+/g, '');// /\D+/g, '' <- remove caracter's that is not number
//     }
//   });
// }

// ValidateCPF.prototype.isValid = function() {
//   if(typeof this.cpfClear === 'undefined') return false;
//   if(this.cpfClear.length !== 11) return false;
//   if(this.isSequence()) return false;
  
//   const cpfPartial = this.cpfClear.slice(0, -2);
//   const digit1 = this.createDigit(cpfPartial);
//   const digit2 = this.createDigit(cpfPartial + digit1);
  
//   const newCpf = cpfPartial + digit1 + digit2;
//   return newCpf === this.cpfClear;
// };

// ValidateCPF.prototype.createDigit = function(cpfPartial) {
//   const cpfArray = Array.from(cpfPartial);

//   let regressive = cpfArray.length + 1;
//   const total = cpfArray.reduce((ac, val) => {
//     ac += (regressive * Number(val));
//     regressive--;
//     return ac;
//   }, 0);
//     const digit = 11 - (total % 11);
//     return digit > 9 ? '0' : String(digit);
// };

// ValidateCPF.prototype.isSequence = function() {
//   const sequence = this.cpfClear[0].repeat(this.cpfClear.length);
//   return sequence === this.cpfClear;
// };

// const cpf = new ValidateCPF('070.987.720-03');

// if(cpf.isValid()){
//   console.log('Your CPF valid');
// } else {
//   console.log('Your CPF not valid');
// }

/* Este código valida um CPF (Cadastro de Pessoas Físicas), que é um número de identificação utilizado no Brasil. */

// Função construtora para validar o CPF
function ValidateCPF(cpfSent) {
  // Define a propriedade 'cpfClear' que remove todos os caracteres não numéricos do CPF fornecido
  Object.defineProperty(this, 'cpfClear', {
    enumerable: true,
    get: function() {
      // Substitui caracteres não numéricos (\D) por nada, deixando apenas números
      return cpfSent.replace(/\D+/g, '');
    }
  });
}

// Método para verificar se o CPF é válido
ValidateCPF.prototype.isValid = function() {
  // Verifica se o CPF está definido e tem exatamente 11 dígitos
  if (typeof this.cpfClear === 'undefined') return false;
  if (this.cpfClear.length !== 11) return false;

  // Verifica se o CPF é uma sequência de números iguais, o que é inválido
  if (this.isSequence()) return false;

  // Extrai os primeiros 9 dígitos do CPF (parte principal)
  const cpfPartial = this.cpfClear.slice(0, -2);

  // Gera os dois últimos dígitos verificadores
  const digit1 = this.createDigit(cpfPartial);
  const digit2 = this.createDigit(cpfPartial + digit1);

  // Concatena os dígitos gerados com a parte principal para formar o CPF completo
  const newCpf = cpfPartial + digit1 + digit2;

  // Compara o CPF gerado com o CPF fornecido inicialmente
  return newCpf === this.cpfClear;
};

// Método para criar um dígito verificador com base nos números do CPF
ValidateCPF.prototype.createDigit = function(cpfPartial) {
  // Converte a string da parte do CPF em um array de números
  const cpfArray = Array.from(cpfPartial);

  // Define o multiplicador regressivo (começa de tamanho + 1)
  let regressive = cpfArray.length + 1;

  // Calcula o total somando o produto de cada dígito pelo multiplicador correspondente
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressive * Number(val));
    regressive--;
    return ac;
  }, 0);

  // Calcula o dígito com base no módulo 11
  const digit = 11 - (total % 11);
  // Se o dígito for maior que 9, retorna '0'; caso contrário, retorna o dígito
  return digit > 9 ? '0' : String(digit);
};

// Método para verificar se o CPF é uma sequência de números repetidos
ValidateCPF.prototype.isSequence = function() {
  // Cria uma sequência repetida do primeiro dígito pelo comprimento total do CPF
  const sequence = this.cpfClear[0].repeat(this.cpfClear.length);
  // Retorna true se o CPF for idêntico à sequência, indicando que é inválido
  return sequence === this.cpfClear;
};

// Exemplo de validação de CPF
const cpf = new ValidateCPF('070.987.720-03');

// Imprime no console se o CPF é válido ou não
if (cpf.isValid()) {
  console.log('Seu CPF é válido');
} else {
  console.log('Seu CPF não é válido');
}
