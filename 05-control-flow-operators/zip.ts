import { Effect } from "effect"

/*
 * Effect.zip
 * Combines two effects into a single effect
 * It will execute the first effect, then the second
 * once both succeed the results are combined into a tuple
 
 * You can run them concurrently too with { concurrent: true }
 */

const task1 = Effect.succeed(1).pipe(
  Effect.delay("200 millis"),
  Effect.tap(Effect.log("task1 done"))
)

const task2 = Effect.succeed("hello").pipe(
  Effect.delay("100 millis"),
  Effect.tap(Effect.log("task2 done"))
)

// Combine the two effects together
//
//      ┌─── Effect<[number, string], never, never>
//      ▼
const program = Effect.zip(task1, task2)

Effect.runPromise(program).then(console.log)
/*
Output:
timestamp=... level=INFO fiber=#0 message="task1 done"
timestamp=... level=INFO fiber=#0 message="task2 done"
[ 1, 'hello' ]
*/

// Concurrent example
const programConcurrent = Effect.zip(task1, task2, { concurrent: true })
Effect.runPromise(programConcurrent).then(console.log)
/*
Output:
timestamp=... level=INFO fiber=#3 message="task2 done"
timestamp=... level=INFO fiber=#2 message="task1 done"
[ 1, 'hello' ]
*/
