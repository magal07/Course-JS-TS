// Função construtrora - Função que cria um objeto
// Função fabrica - Função que cria um objeto
// Construtora -> Precisa iniciar com letra maiúscula -> Pessoa (new)


// função construtora \/ 

function Pessoa (name, surname) {
  const ID = 123456; // variável privada, disponível somente dentro da função
  const methodIntern = function(){}; // para acessar essa função, precisa criar um método público
    // podemos acrescentar uma validação por CPF, login/senha. etc
  
// this torna disponível para o escopo global
  this.name = name; // seria como falar Pessoa.name = name
  this.surname = surname; // seria como falar Pessoa.surname = surname

  this.method = () => {
    console.log(this.name + ': sou um método');
  };
}

// new = cria um objeto vazio e faz o this apontar para o objeto vazio e retorna o objeto pra variavel.
 const p1 = new Pessoa('Marcelo', 'Magalhães');
 const p2 = new Pessoa('Maria', 'Silva'); 

p1.method();