import { Effect, Option } from "effect";

/*
 * Effect.when()
 * Conditionally execute an effect based on a boolean condition
 * If the condition is true, the effect is executed; otherwise, it does nothing
 */

const validateWeightOption = (
	weight: number,
): Effect.Effect<Option.Option<number>> => {
	return Effect.succeed(weight).pipe(Effect.when(() => weight >= 10));
};

Effect.runPromise(validateWeightOption(-5)).then(console.log);
// ?^ { _id: 'Option', _tag: 'None'}

Effect.runPromise(validateWeightOption(20)).then(console.log);
// ^? { _id: 'Option', _tag: 'Some', value: 20}
