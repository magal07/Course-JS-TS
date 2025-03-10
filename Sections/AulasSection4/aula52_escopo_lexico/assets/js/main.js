// ESCOPO LÉXICO

const nome = 'Marcelo';

function falaNome() { // variável vai ir buscando de escopo em escopo até achar a primeira variável nome, se achar, para o get
  console.log(nome);
}

function usaFalaNome(){
  const nome = 'Otávio';
  falaNome();
}

usaFalaNome();