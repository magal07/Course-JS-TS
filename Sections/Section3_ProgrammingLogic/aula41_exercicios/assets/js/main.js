
const x = 1;
const y = 2;

function max(x,y) {
    // if (x > y) return x; usando if
    // return y;
    return x > y ? x : y; // usando ternária
}
// utlizando arrow
const max2 = (x, y) => x > y ? x : y;
// console.log(max(x,  y));
console.log(max2(`X É MAIOR SENDO: ${x}`,  `Y É MAIOR SENDO: ${y}`));