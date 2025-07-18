import { Effect, pipe } from "effect";

/*
 * Control Flow:
 * An advantage of using Effect.gen in conjuction with generators is its capability to employ standard control flow constructs within the generator function
 * These constructs include if/else, for, while, and other branching/looping mechanisms
 * This enhances your ability to express complex control flow logic in your code
 * If you didn't use Effect.gen you wouldn't be able to use the same control flow as you'd be forced to pipe everyything
 */

const getUser = (id: string) => Effect.succeed({ id, isAdmin: id === "admin" });
const getAdminData = () => Effect.succeed("Admin dashboard");
const getRegularData = () => Effect.succeed("User profile");

const withoutGen = (id: string) =>
  pipe(
    getUser(id),
    Effect.flatMap((user) =>
      user.isAdmin ? getAdminData() : getRegularData(),
    ),
  );

const withGen = (id: string) => Effect.gen(function* () {
  const user = yield* getUser(id)

  if (user.isAdmin) {
    return yield* getAdminData()
  } else {
    return yield* getRegularData()
  }
})

Effect.runSync(withoutGen("admin"))
Effect.runSync(withGen("admin"))
