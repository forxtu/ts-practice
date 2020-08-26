/*

Advanced Types
  - Type Guards
  - Using 'in' operator

Exercise:
  Fix type errors in logAnimal function.

  logAnimal function should accept both Dog and Cat

*/

export { };

interface Dog {
  // TODO: Add Dog properties
}

interface Cat {
  // TODO: Add Cat properties
}

// TODO: Create Animal Union type using your knowledge from task 2!

// TODO: Replace types with union type
const animals: unknown[] = [
  {
    name: 'Syndra',
    breed: 'Siberian Husky',
    bark: () => 'Woof!',
  },
  {
    name: 'Simon',
    breed: 'Persian',
    meow: () => 'Meooow!',
  }
];

const logAnimal = (animal: unknown) => {
  let additionalInformation: string;

  // TODO: Something still wrong here!
  if (animal.bark) {
    additionalInformation = animal.bark();
  } else {
    additionalInformation = animal.meow();
  }

  console.log(`${animal.name}, ${animal.breed}, ${additionalInformation}`);
};

animals.forEach(logAnimal);

/*
  In case if you are stuck:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-the-in-operator
*/