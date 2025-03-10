
// FACTORY FUNCTION (Função Fábrica)

function createPeople(name, surname, h, w){
  return {
    name, 
    surname,
// Getter
    get fullName(){
      return ` ${this.surname} ${this.name}`;
    },

    //Setter:
    set fullName(value){
      value = value.split(' '); // tornando array
      this.name = value.shift(); // cortando 1 name
      this.surname = value.join(' '); 
      console.log(value);
    },

    fala(subject = 'falando sobre nada.'){
      // this.name, seria a msm coisa de falar p1.name
      return `${this.name} está ${subject}.`; // this será baseado no objeto q chama a função (fala) neste caso, o p1
    },

    heigh: h,
    weight: w,
    //Getter(get): imc fingindo q é um atributo da classe, ao invés de uma função, pra ser chamado p1.imc linha 24
    get imc(){
      const index = this.weight / (this.heigh ** 2);
      return index.toFixed(2);
    }
  };
}

const p1 = createPeople('Magalhães', 'Marcelo', 1.8, 80);
const p2 = createPeople('Julio', 'Marcelo', 1.8, 80);
const p3 = createPeople('Ferreira', 'Marcelo', 1.8, 80);

console.log(p3.imc);


// p1.fullName = 'Maria Oliveira Silva';
// console.log(p1.fullName);
// // console.log(p1.imc);
// console.log(p1.fala());
