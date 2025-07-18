import { Effect, pipe } from "effect";

/*
 * As:
 * Replaces the value inside an effect with a constant value
 * Effect.as allows you to ignore the original value inside an effect and replace it with a new constant value
 */

const program = pipe(Effect.succeed(5), Effect.as("New value"));

Effect.runPromise(program).then(console.log);
// ^? Output: New value
