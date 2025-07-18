import { Effect } from "effect";

/*
 * Generator:
 * Optional feature to allow us to write similar syntax to async/await instead of pipe/flatMap everywhere
 */

/*
 * Effect.gen
 * Simplifies the task of writing effectful code by utilising generator functions
 * Helps the code appear and behave more like traditional syncrhonous code
 * Helps with readability and error management
 */

const addServiceCharge = (amount: number) => amount + 1;

// Applies discount to a transaction amount *safely*
const applyDiscount = (
  total: number,
  discountRate: number,
): Effect.Effect<number, Error> =>
  discountRate === 0
    ? Effect.fail(new Error("Discount rate cannot be zero"))
    : Effect.succeed(total - (total * discountRate) / 100);

// Simulated asynchronous tasks to fetch transaction amount and discount rate
const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100));
const fetchDiscountRate = Effect.promise(() => Promise.resolve(5));

// Assemble the program using a generator function
const program = Effect.gen(function*() {
  // Use yield* to handle effects
  const transactionAmount = yield* fetchTransactionAmount;
  const discountRate = yield* fetchDiscountRate;
  const discountedAmount = yield* applyDiscount(
    transactionAmount,
    discountRate,
  );

  const finalAmount = addServiceCharge(discountedAmount);
  return `Final amount to charge: ${finalAmount}`;
});

Effect.runPromise(program).then(console.log);
// ^? Output: Final amount to charge: 96
