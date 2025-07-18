import { Effect } from "effect";

/*
 * runPromise:
   * Executes an effect and returns the result as a Promise
   * Use this when you need to execute an effect and work with the result using Promise syntax
   * Typically useful for compatability with other promise-based code
   * If the effect succeeds, the promise will resolve with the result
   * If the effect fails, the promise will reject with an error
 */

Effect.runPromise(Effect.succeed(1)).then(console.log)
// ^? 1

Effect.runPromise(Effect.fail("My Error")).catch(console.error)
// ^? (FiberFailure) Error: My Error
