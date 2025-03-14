//                 -5     -4         -3         -2         -1    <- NEGATIVOS
//                  0      1         2         3          4      <- POSITIVOS 
const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// const remove = names.splice(-2, 2 ); // Remove o ELEMENTO GABRIEL indíce -2 e Júlia indíce -1 pois é -2 <- indice -> 2 qt a ser removida
const remove = names.splice(-3, Number.MAX_VALUE ); // Remove o ELEMENTO Eduardo indíce -3 e Gabriel indíce -2 e Júlia indíce -1 pois é -3 <- indice -> 3 qt a ser removida
console.log(names, remove); // [ 'Maria', 'João', 'Eduardo', 'Gabriel' ] // retorna 1 