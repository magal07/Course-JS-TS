function* generator1() { // asterisco inicial
    yield 'Value 1'; // yield é como se fosse um return, mas ele não encerra a função
    yield 'Value 2'; 
    yield `Value 3`;
}

const g1 = generator1();

function* generator3() {
  yield 0;
  yield 1;
  yield 2;
}

function* generator4() {
  yield* generator3(); // delegando a função generator3 para a função generator4
  yield 3;
  yield 4;
  yield 5;
}

const g4 = generator4();
// for(let value of g4){
//   console.log(value); // 0, 1, 2, <- generator three and generator four -> 3, 4, 5
// }


// function* generator2() { // criando um gerador infinito com while
//     let i = 0;
//     while(true) {
//         yield i;
//         i++;
//     }
// }


// // const g2 = generator2();
// // console.log(g2.next().value);
// // console.log(g2.next().value);
// // console.log(g2.next().value);


// for(let value of g1){
//   console.log(value);
// }

function* generator5(){
  yield function(){
    console.log('Vim do y1');
  };

  return function() { // criando um return para encerrar a função (tipo um break)
    console.log('Vim do return');
  }

  yield () => {
    console.log('Vim do y2');
  };
}

const g5 = generator5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();

/** Value 1 // vai aparecer value: 'Value 1' porque o next() retorna um objeto com valu
* e e done e o value é o que foi passado no yield 
** (sequência de valores) no caso ele não encerra. **/
// console.log(g1.next().value); 
// console.log(g1.next().value); 
// console.log(g1.next()); // { value: 'Value 3', done: false }
// console.log(g1.next()); // undefined
// console.log(g1.next()); // undefined