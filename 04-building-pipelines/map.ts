import { Effect, pipe } from "effect";

/*
 * Map:
 * Transofrms the value inside an effect by applying a function to it
 */


const addTip = (amount: number) => amount + 1;

const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))

const finalAmount = pipe(
  fetchTransactionAmount,
  Effect.map(addTip)
)

Effect.runPromise(finalAmount).then(console.log)
// ^? Output: 101
