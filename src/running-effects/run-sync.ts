import { Effect } from "effect";

/*
 * runSync:
   * Executes an effect synchronously, running it immeditialy and returning the result
   * Use this to run an effect that does not fail and does not include any async opterations
   * If it fails or involves async operations, it will throw an error and execution will stop
 */

const program = Effect.sync(() => {
  console.log("Hello, World!")
  return 1
})

const result = Effect.runSync(program)
console.log(result)

