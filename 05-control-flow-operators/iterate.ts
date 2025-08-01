import { Effect } from "effect"

/*
 * Effect.iterate
 * Lets you repeatedly update state through an effectful opteration
 * Runs the body effect to update the state in each iteration
 */

const result = Effect.iterate(
  // Initial result
  1,
  {
    // Condition to continue iterating
    while: (result) => result <= 5,
    // Operation to change the result
    body: (result) => Effect.succeed(result + 1)
  }
)

Effect.runPromise(result).then(console.log)
// ^? 6
