/*

Union types

Exercise:
  - Union Type 'Animal' is missing, please define it and use it to fix
    all the TS errors.

*/

export { };

interface Dog {
  // TODO: Add Dog properties
}

interface Bird {
  // TODO: Add Bird properties
}

// TODO: Create Animal Union type here

// TODO: Replace types
const animals: unknown[] = [
  {
    name: 'Ahri',
    age: 2,
    breed: 'Siberian Husky',
    bark: () => 'Big wooooof!',
  },
  {
    name: 'Jacky',
    age: 1,
    breed: 'Crested',
    chirp: () => 'Chi-pi-pi',
  }
];

animals.forEach((animal: unknown) => {
  console.log(`${animal.name}, ${animal.age}, ${animal.breed}`);
});

/*
  In case if you are stuck:
  https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
*/