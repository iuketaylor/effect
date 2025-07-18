import { Data, Effect } from "effect";

/*
 * Summary:
   * Effect.Sync and Effect.Try create Effects that represent synchronous computations
   * Effect.Sync wraps code that throws exceptions
   * Effect.Try wraps code that throws exceptions and lets you map those exceptions to custom errors
 */


/*
 * Sync:
   * Creates an Effect that represents a synchronous side-effectful computation
   * Improves predictabily of side effects
 */
const log = (message: string) => Effect.sync(() => console.log(message));
const program = log("Hello, World!");
// ^? Effect.Effect<void, never, never> - can't fail

/*
 * Try:
   * Creates an Effect that represents a synchronous computation that might fail
   * Designed to handle operations that could throw exceptions
   * It captures those exceptions and transforms them into manageable errors
   * It's basically try/catch where the catch is UnknownExceptionError if not specified 
 */
const parse = (input: string) => Effect.try(() => JSON.parse(input));
const program1 = parse("");
// ^? Effect.Effect<any, UnknownExceptionError, never> - generic error

class CustomError extends Data.TaggedError("CustomError")<{
  message: string;
}>{}

const parseWithCustomError = (input: string) =>
  Effect.try({
    try: () => JSON.parse(input),
    catch: (unknown) => new CustomError({message: `something went wrong ${unknown}`}),
  });
const program4 = parseWithCustomError("")
      // ^? Effect.Effect<any, CustomError, never> - error is mapped to CustomError

