/* Example Fruits

const fruits = ['Pear', 'Apple', 'Grape'];

// for (let i = 0; i< frutas.length; i++) {
//         console.log(frutas);
// }
     //    for in to read the indexes of our vector or array
        // for in para ler os indices do nosso vetor/matriz
for (let index in fruits) {
    console.log(fruits[index]);
}*/ 

// Content [ for in ]

/* Example Person or People */ 

const person = {
    name: ': Marcelo',
    surname: ': Magalhães',
    age: `: [25]`,
};

// Simples ways to acess key data
// console.log(person.name);
// console.log(person['name']);
// Another way: 
// const keys = 'name';
// console.log(person[keys]);

// // go through for let index in person
for(let key in person){
    console.log(key, person[key]); // Searching for key value within person[key]
}

