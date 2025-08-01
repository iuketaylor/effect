import { Effect, Random, Console } from "effect";

/*
 * Effect.if 
 * Executes one of two effects based on condition
 */

const flipTheCoin = Effect.if(Random.nextBoolean, {
  onTrue: () => Console.log("Heads"),
  onFalse: () => Console.log("Tails")
})

Effect.runFork(flipTheCoin)


