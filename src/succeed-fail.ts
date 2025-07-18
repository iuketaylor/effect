import { Effect, Record } from "effect";

interface User {
  readonly id: number;
  readonly name: string;
}

const getUser = (userId: number): Effect.Effect<User, Error> => {
  const userDatabase: Record<number, User> = {
    1: { id: 1, name: "John Doe" },
    2: { id: 2, name: "Jane Smith" },
  };

  const user = userDatabase[userId]
  if (user) {
    return Effect.succeed(user)
  } else {
    return Effect.fail(new Error("User not found"))
  }
};

const successfulEffect = getUser(1)
console.log(successfulEffect)

const errorEffect = getUser(4)
console.log(errorEffect)
