import { Console, Effect } from "effect";

/*
 * Raising Erorrs:
 * With Effect.gen you can't just throw eorrs like normal JS
 * You have to introduce them via yield* Effect.fail
 * This is good because yield* Effect.fail creates typed failures whereas throw creates untyped exceptions 
 */

const task1 = Console.log("task1...")
const task2 = Console.log("task2...")

const program = Effect.gen(function* () {
  yield* task1
  yield* task2

  yield* Effect.fail("Something went wrong")
})

Effect.runPromise(program).then(console.log, console.error)
// Output: task1... task2... (FiberFailure) Error: Something went wrong
