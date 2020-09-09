/*

Enums

Enums allow a developer to define a set of named constants. Using enums
can make it easier to document intent, or create a set of distinct cases.
TypeScript provides both numeric and string-based enums.

** Where we can use Enums **

- Enums should ideally be used in situations where there are distinct values that
can be seen as constants, like seven days of the week
- Enums can also be used in places where strings or constants need to be represented
in a variable.

** Where we should NOT use Enums **

- When you plan to re-assign or change the enum member values, enums are type-safe
and therefore would return compile errors on re-assignment
- When you want to record dynamic values, enums are best suited for finite items and
the general idea - behind it was to help create a user-defined constants system
- Enums cannot be used as variables, doing so would return errors

** Example **

enum UserRoles {
  Admin,
  User
}

const admin = UserRoles.Admin

Exercise:
  - Create numeric Enum
  - Create string Enum

*/

export {};

/*
  TODO-1: Create numeric Enum - Week that should include days of the week
*/

// enum Week

const monday = Week.Monday; // Should be 0

// We can access enums vice versa by index
const sundayReversed = Week[6]; // Should be Sunday

/*
  TODO-2: Create string Enum - UserRole which should include 'admin' and 'user' roles
*/

// enum UserRole

const admin = UserRole.Admin; // Should be 'admin'
const user = UserRole.User; // Should be 'user'

/*
  In case if you are stuck:
  https://www.typescriptlang.org/docs/handbook/enums.html
*/
