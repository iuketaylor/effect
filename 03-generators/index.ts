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

const applyDiscount = (
  total: number,
  discountRate: number,
): Effect.Effect<number, Error> =>
  discountRate === 0
    ? Effect.fail(new Error("Discount rate cannot be zero"))
    : Effect.succeed(total - (total * discountRate) / 100);
