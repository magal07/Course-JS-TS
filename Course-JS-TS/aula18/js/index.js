// // const nome01 = 'Luiz';
// // const sobrenome01 = 'Miranda';
// // const idade01 = 25;

// // const nome02 = 'Maria';
// // const sobrenome02 = 'Oliveira';
// // const idade02 = 55;

// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade
//     };
//         /* ouuu: 
//         // nome: nome,
//         // sobrenome: sobrenome,
//         // idade: idade */ 
        
// }

// const pessoa1 = criaPessoa('Marcelo', "Magalhães", "25");
// const pessoa2 = criaPessoa('Julio', "Magalhães", "25");
// const pessoa3 = criaPessoa('Isaac', "Magalhães", "25");
// const pessoa4 = criaPessoa('Nivia', "Magalhães", "25");
// const pessoa5 = criaPessoa('Amanda', "Magalhães", "25");

// console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);

// // console.log(pessoa1.nome);
// // console.log(pessoa1.sobrenome);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
// n precisa do function
    fala() {
    console.log(`${this.nome} 
        ${this.sobrenome} está falando que sua idade atual é
        ${this.idade}`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


