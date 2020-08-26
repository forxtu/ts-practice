/*

Interfaces and types

Usage of types in TS is similar to Flow apart from that Flow doesn't have
an Interface.

Exercise:
  - Define the interface 'Dog' and use it accordingly.

*/

export { };

// TODO: Create interface/type Dog here

const dogs: unknown[] = [
  {
    name: 'Grace',
    age: 3,
    breed: 'Irish Setter',
  },
  {
    name: 'Ori',
    age: 2,
    breed: 'Shih Tzu',
  },
];

dogs.forEach((dog: unknown) => {
  console.log(`${dog.name}, ${dog.age}, ${dog.breed}`);
});

/*
  In case if you are stuck:
  https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases
*/