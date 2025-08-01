import { Effect, Console } from "effect"

/*
 * Effect.forEach
 * Basically the same as JS Array.forEach 
 * If an effect fails, the iteration stops immeditaly and propagates the error
 * Concurrency option which controls how many operations are performed concurrently
 */

const result = Effect.forEach([1, 2, 3, 4, 5], (n, index) =>
  Console.log(`Currently at index ${index}`).pipe(Effect.as(n * 2))
)

Effect.runPromise(result).then(console.log)
/* ^?
Currently at index 0
Currently at index 1
Currently at index 2
Currently at index 3
Currently at index 4
[ 2, 4, 6, 8, 10 ]
*/
