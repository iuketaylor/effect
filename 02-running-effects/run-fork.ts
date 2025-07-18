import { Console, Effect, Fiber, Schedule } from "effect";

/*
 * runFork:
 * The foundational function for running effects - returns a "fiber" that can be observed or interupted
 * Used to run an effect in the background by creating a fiber
 * Its the base function for all other run functions
 * "Unless to specifically need a Promise or synchronous operation, Effect.runFork is a good default choice"
 */

/*
 * In this example, the program continuously logs "running..." with each repeition spaced out 200ms apart
 * To stop the execution of the program, we use Fiber.interrupt
 * This allows you to control the execution flow and terminate when necessary
 */
const program = Effect.repeat(
  Console.log("running..."),
  Schedule.spaced("200 millis"),
);

const fiber = Effect.runFork(program);
// ^? RuntimeFiber<number, never>

setTimeout(() => {
  Effect.runFork(Fiber.interrupt(fiber));
}, 500);
