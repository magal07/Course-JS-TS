/* MODELO 1 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if (number === 2 || number === 3) {
        console.log('pulei o 2 e o 3');
        continue; // Pula para a próxima iteração do loop externo
    }

    // Verifica se o número atual é 7
    if (number === 7) {
        const index = numbers.indexOf(number); // Obtém o índice do número 7
        console.log(`Encontrado o laço #${index + 1} e saindo`);
        break; // Sai do loop externo ao encontrar o número 7
    }

    console.log(number); // Mostra o número que está sendo iterado
}
*/
/* MODELO 2 COM FOR IN
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numbers) {
    
    let number = numbers[i];
    if (number === 2 || number === 3) {
        console.log('pulei o 2 e o 3');
        continue; // Pula para a próxima iteração do loop externo
    }

    // Verifica se o número atual é 7
    if (number === 7) {
        const index = numbers.indexOf(number); // Obtém o índice do número 7
        console.log(`Encontrado o laço #${index + 1} e saindo`);
        break; // Sai do loop externo ao encontrar o número 7
    }

    console.log(number); // Mostra o número que está sendo iterado
}
 */
/* MODELO 3 COM WHILE 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numbers.length) {
    let number = numbers[i];
    
    if (number === 2 || number === 3) {
        console.log('pulei o 2 e o 3');
        i++;
        continue; // Pula para a próxima iteração do loop externo
    }

    console.log(number);
    
    // Verifica se o número atual é 7
    if (number === 7) {
        console.log(`Encontrado o laço #${i + 1} e saindo`);
        i++;
        break; // Sai do loop externo ao encontrar o número 7
    }
    i++;
    console.log(number); // Mostra o número que está sendo iterado
}
*/ 

/* MODELO 4 COM DO WHILE */ 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do {
    let number = numbers[i];
    
    if (number === 2 || number === 3) {
        console.log('pulei o 2 e o 3');
        i++;
        continue; // Pula para a próxima iteração do loop externo
    }

    console.log(number);
    
    // Verifica se o número atual é 7
    if (number === 7) {
        console.log(`Encontrado o laço #${i + 1} e saindo`);
        i++;
        break; // Sai do loop externo ao encontrar o número 7
    }
    i++;
} while (i < numbers.length);





