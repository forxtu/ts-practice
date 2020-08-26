/*

Utility types

Exercise:
  - Partial<Type>
    Constructs a type with all properties of Type set to optional.
    This utility will return a type that represents all subsets of a given type.

  - Readonly<Type>
    Constructs a type with all properties of Type set to readonly,
    meaning the properties of the constructed type cannot be reassigned.

  - NonNullable<Type>
    Constructs a type by excluding null and undefined from Type.
    Can be commonly used in React when we pass props and want to make sure
    to exlucde null and undefined.

  - Pick<Type, Keys>
    Constructs a type by picking the set of properties Keys from Type.

  - Omit<Type, Keys>
    Constructs a type by picking all properties from Type and then removing Keys.

*/

export { };

/*
  TODO-1: Use Partial utility type to fix an error
*/
interface Todo {
  title: string;
  description: string;
}

const updateTodo = (todo: Todo, fieldsToUpdate: Todo) => ({
  ...todo,
  ...fieldsToUpdate
})

const todo1 = {
  title: 'learn typescript',
  description: 'read theory'
};

const todo2 = updateTodo(todo1, {
  description: 'practice more'
});

/*
  TODO-2: Use Readonly utility type to freeze an object

  Extra TODO: How you can set particular property of the object to readonly
  without Readonly utility type? Let's find out :)
*/
interface Person {
  role: string;
}

const person: Person = {
  role: 'developer',
};

// This should indicate an error that you can't re-asign propery
person.role = 'designer';

/*
  TODO-3: Using NonNullable utility type make sure that we can't pass null or
  undefined into the function. Let's assume function can take only "string"
*/

type NonNullableChildren = null | undefined;

const renderChildren = (children: NonNullableChildren) => children;

console.log(renderChildren(null));
console.log(renderChildren(undefined));

/*
  TODO-4: Using Pick utility type create DogInfo type which should include info
  about the Dog (exluding 'bark' function)

  Extra TODO: Using Omit<Type, Keys> create DogInfo type which also should include info about
  the Dog (excluding 'bark' function)
*/
interface Dog {
  name: string;
  age: number;
  breed: string;
  bark: () => string;
}

// type DogInfo =

const dogInfo: unknown = {
  name: 'Grace',
  age: 2,
  breed: 'Irish Setter'
};

/*
  In case if you are stuck:
  https://www.typescriptlang.org/docs/handbook/utility-types.html

  If you are super-duper-cool and those tasks were too easy - you can find more
  Utility types by following link above!
*/