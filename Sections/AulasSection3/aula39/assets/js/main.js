// While or Do While  == Enquanto

// const nome = 'Luiz';
// let i = 0;

// while(i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }

// console.log('Segue');

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // floor retorna (numero int)
}


const min = 1;
const max = 50;
// let rand = random(min, max);
let rand = 10;
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('####');
do {
    console.log(rand);
} while (rand !== 10);
