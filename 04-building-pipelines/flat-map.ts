import { Effect, pipe } from "effect";

/*
 * flatMap:
 * Chains effects to produce new Effect instances
 * Takes in a function that returns an Effect, then flattens the nested Effect structure
 */

const applyDiscount = (
  total: number,
  discountRate: number,
): Effect.Effect<number, Error> =>
  discountRate === 0
    ? Effect.fail(new Error("Discount rate cannot be zero"))
    : Effect.succeed(total - (total * discountRate) / 100);

const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100));

const finalAmount = pipe(
  fetchTransactionAmount,
  Effect.flatMap((amount) => applyDiscount(amount, 5)),
);

Effect.runPromise(finalAmount).then(console.log);
// ^? Output: 95
