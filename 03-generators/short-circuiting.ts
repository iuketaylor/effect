import { Effect } from "effect";

/*
 * Short Circuiting
 * Effect.gen stops the execution when any Effect fails, just like how await works with rejected Promises
 * As soon as yield* produces a failure, the entire generator stops and returns that failure
 */

type User = { id: string };
const getUser = (id: string) => Effect.succeed({ id });
const validateUser = (user: User) =>
  Effect.fail(`Error validating user: ${user.id}`);
const saveUser = (user: User) => Effect.succeed(`Saved user ${user.id}`);

const pipeline = Effect.gen(function*() {
  const user = yield* getUser("123"); // ✅ Succeeds
  const validated = yield* validateUser(user); // ❌ Fails
  const saved = yield* saveUser(validated); // 🚫 Never runs
  return saved;
});

const result = Effect.runSync(pipeline)
console.log(result)
// ^? {_tag: "Fail", error: "Error validating user: 123"}
