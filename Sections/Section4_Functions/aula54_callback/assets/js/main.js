// Callback: Executa uma ação após o sucesso de uma função

function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function(){
    console.log('f1');
    if(callback) callback();
  }, rand());
}
function f2(callback) {
  setTimeout(function(){
    console.log('f2');
    if(callback) callback();
  }, rand());
}
function f3(callback) {
  setTimeout(function(){
    console.log('f3');
    if(callback) callback();
  }, rand());
}

/*
 * CALLBACK HELL / BONECA RUSSA
 * 
 * f1(function(){
 *   f2(function(){
 *     f3(function(){
 *       console.log('Olá mundo!');
 *     });
 *   });
 * });
 */

// CALLBACK em sua forma certa, separado sem arvore de natal

f1(f1Callback); //início do Callback

function f1Callback(){
  f2(f2Callback);
}
function f2Callback(){
  f3(f3Callback);
}
function f3Callback() {
  console.log('Olá mundo!');
}

