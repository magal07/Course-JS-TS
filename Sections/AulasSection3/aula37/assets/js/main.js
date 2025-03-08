
            //012345...." 
const nomes = ['Luiz', 'Otávio', 'Júlio'];

// For clássico - Usually with iterables (array ou strings)
// For in - Return the index or key (string, array or objects)
// For of - Return only the value (iterables, arrays or strings)

/* for (let i = 0; i < nome.length; i++) {
// console.log(nome[i]);
// }   */


for (let i in nomes) {
    console.log(nomes[i]);
}  

console.log('IN | OF -------------------');
for(let value of nomes) {
    console.log(value);
}

console.log('-----------------------')
// way forEach // cada // searching value and index Luiz = 0, Otávio = 1... and array completed inside keys, example down
//       value, index, array completed 
        // Luiz 0 [ 'Luiz', 'Otávio', 'Júlio' ]
        // Otávio 1 [ 'Luiz', 'Otávio', 'Júlio' ]
        // Júlio 2 [ 'Luiz', 'Otávio', 'Júlio' ]
nomes.forEach(function(value, index, array){
    console.log(value, index, array);
});
