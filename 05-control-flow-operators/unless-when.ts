import { Effect, Random } from "effect";

/*
 * unlessEffect
 * This is the opposite of Effect.whenEffect
 * Executes an effect conditionally, based on the result of another effect
 */

// Execute Random.nextInt IF Random.nextBoolean is false
const randomIntOption = Random.nextInt.pipe(
	Effect.unlessEffect(Random.nextBoolean),
);


console.log(Effect.runSync(randomIntOption))
// ^? { _id: 'Option', _tag: 'None'}
// OR
// ^? { _id: 'Option', _tag: 'Some', value: <random_number>}

