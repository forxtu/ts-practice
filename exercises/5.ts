/*

Generics

Exercise:
  - Create generic function
  - Create generic interface

** Example of the generic function **

const genericFc = <T>(): void => {
  console.log('returns nothing')
}

*/

export { };

/*
  TODO-1: Rebuild those functions to get 1 generic instead
*/
const fnThatReturnsString = (arg: string): string => arg;
const fnThatReturnsNumber = (arg: number): number => arg;

// Example of usage:
// const stringFn = genericFn<string>('hello');
// const numberFn = genericFn<number>(10);

// where 'genericFn' is generic function

/*
  TODO-2: Create Generic interface and pass type into it instead of function
*/
// Example of usage:
// const stringFn: GenericFn<string> = genericFn;
// const numberFn: GenericFn<number> = genericFn;

// where 'GenericFn' is generic interface

/*
  In case if you are stuck:
  https://www.typescriptlang.org/docs/handbook/generics.html
*/