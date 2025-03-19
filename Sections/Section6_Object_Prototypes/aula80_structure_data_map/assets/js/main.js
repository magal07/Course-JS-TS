const persons = [
  {id: 3, name: 'Luiz'},
  {id: 2, name: 'Maria'},
  {id: 1, name: 'Helena'}
];

// const newPersons = {};
// for (const person of persons){
//   const { id } = person;
//   newPersons[id] = {...person};
// }

const newPersons = new Map();
for (const person of persons){
  const { id } = person;
  newPersons.set(id,  {...person}); // setando value
}
// console.log(newPersons.get(2));
// for(const [identifier, {id, name}] of newPersons) {
// for (const person of persons) {
// console.log(persons);
// }

// aqui é praticamente um CRUD
newPersons.delete(2);
console.log(newPersons);