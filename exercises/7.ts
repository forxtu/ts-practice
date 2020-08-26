/*

Enums

Enums allow a developer to define a set of named constants. Using enums
can make it easier to document intent, or create a set of distinct cases.
TypeScript provides both numeric and string-based enums.

Enums can be confusing at first but they are pretty usefull when you need
to define user roles, week days or month titles for example.
Instead of using numbers (or object with strings) for user role (0 - admin, 1 - user)
we could create an enum UserRole that will contain user roles.

** Example **

enum UserRoles {
  Admin,
  User
}

const admin = UserRoles.Admin

Exercise:
  - Create numeric Enum

*/

export { };

/*
  TODO: Create numeric Enum - Week that should include days of the week
*/

// enum

const monday = Week.Monday; // Should be 0

// We can access enums vice versa by index
const sundayReversed = Week[6]; // Should be Sunday

/*
  In case if you are stuck:
  https://www.typescriptlang.org/docs/handbook/enums.html
*/