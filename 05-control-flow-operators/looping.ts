import { Effect } from "effect";

/*
 * Effect.loop
 * Allows you to repeatedly update a state using a step function
 * The loop continues until a condition defined by the `while` function becomes false
 * It's similar to the while loop in JS
 */

const result = Effect.loop(
	// initial state
	1,
	{
		// Condition to continue looping
		while: (state) => state <= 5,
		// What to do each iteration of the loop
		step: (state) => state + 1,
		// Effect to be performed on each iteration
		body: (state) => Effect.succeed(state),
		// when this is set to true, it will discard the result of each effectful operation
		// returning void instead of an array
		// discard: true
	},
);

Effect.runPromise(result).then(console.log);
// ^? [1, 2, 3, 4, 5 ]
