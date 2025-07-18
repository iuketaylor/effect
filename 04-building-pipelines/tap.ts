import { Effect, Console, pipe } from "effect";

/*
 * Tap
 * Runs a side effect with the result of an effect without changing the original value
 * Useful when you need to record an action but want the original value to be passed to the next step
 * Works similarly to Effect.flatMap but ignores the result of the function passed to it
 * If the side effect fails, the rest of the chain will fail too
 */

const applyDiscount = (
  total: number,
  discountRate: number
): Effect.Effect<number, Error> =>
  discountRate === 0
    ? Effect.fail(new Error("Discount rate cannot be zero"))
    : Effect.succeed(total - (total * discountRate) / 100)

const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

const finalAmount = pipe(
  fetchTransactionAmount,
  Effect.tap((amount) => Console.log(`Apply a discount to: ${amount}`)),
  Effect.flatMap((amount) => applyDiscount(amount, 5))
)

Effect.runPromise(finalAmount).then(console.log)
// ^? Output: Apply a discount to: 100 95
