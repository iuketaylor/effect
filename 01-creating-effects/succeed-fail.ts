import { Effect, Record } from "effect";

/*
 * Summary:
   * Effect introduces dedicated constructors for creating Effects that represent both success and failure
   * Effect.succeed: Creates an Effect that always succeeds with a given value
   * Effect.fail: Creates an Effect that represents an error that can be recovered from
   * These constructors allow you to handle success and failure cases while leveraging the type system to track errors
 */

interface User {
  readonly id: number;
  readonly name: string;
}

const getUser = (userId: number): Effect.Effect<User, Error> => {
  const userDatabase: Record<number, User> = {
    1: { id: 1, name: "John Doe" },
    2: { id: 2, name: "Jane Smith" },
  };

  const user = userDatabase[userId];
  if (user) {
    return Effect.succeed(user);
  } else {
    return Effect.fail(new Error("User not found"));
  }
};

const successfulEffect = getUser(1);
console.log(successfulEffect);

const errorEffect = getUser(4);
console.log(errorEffect);
