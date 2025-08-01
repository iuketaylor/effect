import { Effect, Random } from "effect"

/*
 * Effect.unless 
 * This is just the opposite of Effect.when 
 * aka if (!condition) execute the effect
 */

const shouldSkip = false;

// get a random int unless shouldSkip is true
const randomInt = Random.nextInt.pipe(
  Effect.unless(() => shouldSkip)
)

console.log(Effect.runSync(randomInt))
