/* Immediately Invoked Function Expression (IIFE) that performs a specific task.
 * 
 * This function is executed immediately after it is defined. It is often used to
 * create a new scope to avoid polluting the global namespace.
 * 
 * @param {type} paramName - Description of the parameter.
 * @returns {type} Description of the return value.
 */
// \/ -> (function){escopo/funções/chamadas etc.})->informando a function();
(function(age, weight, height){
  const surname = 'Miranda';
  function criaNome(name){
    return name + ' ' + surname;
  }
  function falaNome(){
    console.log(criaNome('Caio'));
  }
  falaNome();
  console.log(age, weight, height)
})(30, 80, 1.80);
