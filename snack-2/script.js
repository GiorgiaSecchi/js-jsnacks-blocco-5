const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const names = people.map((person) => person.name).join(`, `);
console.log(names);

// const names = people.map((person) => person.name);
// console.log(names);

// people.forEach((person) => console.log(person.name));
