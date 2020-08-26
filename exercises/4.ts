/*

Advanced Types
  - Union type predicates
    To define a type guard, we simply need to define a function whose
    return type is a type predicate. Or use it on object.

Exercise:
  Fix TS errors

*/

export { };

interface Dog {
  type: string;
  name: string;
  breed: string;
  bark: () => string;
}

interface Cat {
  type: string;
  name: string;
  breed: string;
  meow: () => string;
}

type Animal = Dog | Cat;

const animals: Animal[] = [
  {
    type: 'dog',
    name: 'Syndra',
    breed: 'Siberian Husky',
    bark: () => 'Woof!',
  },
  {
    type: 'cat',
    name: 'Simon',
    breed: 'Persian',
    meow: () => 'Meooow!',
  }
];

// TODO: Fix an error using Union type predicates
const isDog = (animal: Animal) => animal.type === 'dog';
const isCat = (animal: Animal) => animal.type === 'cat';

const logAnimal = (animal: Animal) => {
  let additionalInformation: string = '';

  if (isDog(animal)) {
    // TODO: Fix an error using Union type predicates
    additionalInformation = animal.bark();
  }

  if (isCat(animal)) {
    // TODO: Fix an error using Union type predicates
    additionalInformation = animal.meow();
  }

  console.log(`${animal.name}, ${animal.breed}, ${additionalInformation}`);
};

animals.forEach(logAnimal);

/*
  In case if you are stuck:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates
*/