/* 
*Operadores Aritiméticos 
* + Adição / Concatenação ( - / *) 
* ** PONTENCIAÇÃO
* RESTO DA DIVISÃO = % mod/ 

* ORDEM DE PRECEDÊNCIA
()
**
* / %
+ -

 Exemplo 1
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 * num2 / num3);

// console.log(num1 + (num2 * num3));
// console.log(num1 % num2);  */
/* NaN - Not a Number
const num1 = 10;
const num2 = parseInt('5.2'); // convertendo string para number
const num2 = parseFloat('5.2'); // convertendo string para float
const num2 = Number('5.2'); // convertendo string para Number (int ou float)
console.log(num1 * num2); // NaN */
let contador = 1;
contador++; // 2 - Incrementando
++contador; // 3 Incrementando - porém incrementa antes de mostrar
console.log(contador);
console.log(--contador); // decrementar

// modo certo de se fazer 
console.log("-------------------");

let contadorUm = 1; // Variável corrigida
contadorUm++; // Incrementa a variável corretamente
console.log(contadorUm); 

console.log("-------------------");
// operadores de atribuição
const passo = 2;
let contadorPassos = 1;
/* pulando de 2 em 2 MODELO 1
contadorPassos = contadorPassos + 2;
console.log(contadorPassos);
contadorPassos = contadorPassos + 2;
console.log(contadorPassos);
contadorPassos = contadorPassos + 2;
console.log(contadorPassos); */
contador += passo; // contador = contador + passo;
contador += passo; // contador = contador + passo;
contador += passo; // contador = contador + passo;
console.log(contador);
contador *= 2;