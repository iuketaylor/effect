import { Effect, Random } from "effect";

/*
 * whenEffect
 * Executes an effect conditionally, based on the result of another effect
 */

// Execute Random.nextInt IF Random.nextBoolean is true
const randomIntOption = Random.nextInt.pipe(
	Effect.whenEffect(Random.nextBoolean),
);


console.log(Effect.runSync(randomIntOption))
// ^? { _id: 'Option', _tag: 'None'}
// OR
// ^? { _id: 'Option', _tag: 'Some', value: <random_number>}

