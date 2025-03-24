// module.exports = function (x, y) {
//   return x * y;
// };
// console.log(module.exports(2, 2));

// module.exports = 2;

module.exports = class Dog {
  constructor(name) {
    this.name = name;
  }
  latir() {
    console.log(`${this.name} is going woof woof`);
  }
};
