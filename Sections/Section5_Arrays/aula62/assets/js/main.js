// string, objects, functions, numbers...
// const names = new Array('Alice', 'Bob', 'Charlie');

// names[2] = 'John';
//              0         1         2          3        4
// const names = ['Alice', 'Bob', 'Charlie', 'Wallace', 'Rosana'];
// delete names[2];
// const novo = names; // os dois apontam para o mesmo valor, se mudar um muda o outro e vice-versa
// const novo = [...names]; // cria uma cópia do array com spread operator
// novo.pop();
// console.log(names); // [ 'Alice', 'Bob', <1 empty item> ]
// console.log(novo);
// console.log(names.length); // retorna o tamanho do array
// const remove = names.pop(); // remove end element
// const remove = names.shift(); // remove first element and deslocates the others
// names.push('John'); // add element in the end
// names.unshift('John'); // add element in the beginning
// const novo = names.slice(0, -1); // cria uma cópia do array com os elementos de 1 a 3 // remove the last element
// console.log(novo);

/**   Métodos para manipulação de arrays:
 *
 * 
 * 1. Remover o último elemento:
 *    - pop(): Remove o último elemento do array e o retorna.
 *      Ex: const lastElement = array.pop();
 * 
 * 2. Adicionar elemento no final:
 *    - push(elemento): Adiciona um ou mais elementos ao final do array.
 *      Ex: array.push('novoElemento');
 * 
 * 3. Remover o primeiro elemento:
 *    - shift(): Remove o primeiro elemento do array e o retorna.
 *      Ex: const firstElement = array.shift();
 * 
 * 4. Adicionar elemento no início:
 *    - unshift(elemento): Adiciona um ou mais elementos no início do array.
 *      Ex: array.unshift('novoElemento');
 * 
 * 5. Encontrar índice:
 *    - indexOf(valor): Retorna o índice de um valor ou -1 se não encontrado.
 *      Ex: const index = array.indexOf('valor');
 * 
 * 6. Modificar elementos:
 *    - splice(indice, quantidade, novosElementos): Remove ou adiciona elementos em posições específicas.
 *      Ex: array.splice(1, 2, 'novoElemento'); // Remove 2 itens a partir do índice 1 e adiciona 'novoElemento'.
 * 
 * 7. Criar cópias:
 *    - slice(inicio, fim): Retorna uma cópia de uma parte do array sem alterar o original.
 *      Ex: const newArray = array.slice(0, 2);
 * 
 * 8. Iterar sobre os elementos:
 *    - forEach(callback): Executa uma função para cada elemento do array.
 *      Ex: array.forEach(item => console.log(item));
 * 
 * 9. Transformar elementos:
 *    - map(callback): Cria um novo array aplicando a função callback em cada elemento.
 *      Ex: const newArray = array.map(item => item.toUpperCase());
 */


const names = ['Marcelo', 'Henrique', 'Silva', 'Santos'];
const name = names.join(' '); // junta os elementos do array em uma string
// const names = name.split(' '); // separa a string em um array de strings (espaços, virgulas, etc)
console.log(names);