// FACTORY FUNCTION (Função Fábrica)

function createPeople(name, surname, h, w) {
  // A função createPeople é uma função fábrica que cria e retorna um objeto pessoa com base nos parâmetros fornecidos.
  return {
    name, // nome da pessoa
    surname, // sobrenome da pessoa
    
    // Getter
    get fullName() { // getter que age como uma variável para obter o nome completo
      return `${this.surname} ${this.name}`; // concatena o sobrenome e o nome, retornando o nome completo
    },

    // Setter
    set fullName(value) { // setter que define o nome completo
      value = value.split(' '); // divide o valor em um array, separando os espaços
      this.name = value.shift(); // remove e retorna o primeiro elemento do array, definindo como nome
      this.surname = value.join(' '); // junta os elementos restantes do array e define como sobrenome
      console.log(value); // imprime o array modificado
    },

    fala(subject = 'falando sobre nada.') { // método fala com parâmetro opcional subject
      return `${this.name} está ${subject}.`; // retorna uma string que descreve a ação da pessoa
    },

    heigh: h, // altura da pessoa
    weight: w, // peso da pessoa

    // Getter: IMC (Índice de Massa Corporal)
    get imc() { // getter que calcula o IMC da pessoa
      const index = this.weight / (this.heigh ** 2); // fórmula para calcular o IMC
      return index.toFixed(2); // retorna o IMC com duas casas decimais
    }
  };
}

// Criação de três objetos pessoa usando a função fábrica
const p1 = createPeople('Magalhães', 'Marcelo', 1.8, 80);
const p2 = createPeople('Julio', 'Marcelo', 1.8, 80);
const p3 = createPeople('Ferreira', 'Marcelo', 1.8, 80);

console.log(p3.imc); // Exibe o IMC de p3 no console

// Código comentado para uso posterior
// p1.fullName = 'Maria Oliveira Silva'; // Define o nome completo de p1
// console.log(p1.fullName); // Exibe o nome completo de p1
// console.log(p1.imc); // Exibe o IMC de p1
// console.log(p1.fala()); // Exibe a fala de p1 com o texto padrão
