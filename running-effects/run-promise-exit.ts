import { Effect } from "effect";

/*
 * runPromiseExit:
   * Runs an effect and returns the Promise that resolves to an Exit, which represents the outcome (success or failure) of the effect
   * Basically the same as runSyncExit but this is for Promises
 */

Effect.runPromiseExit(Effect.succeed(1)).then(console.log)
// ^? {_id: "Exit", _tag: "Success", value: 1}

Effect.runPromiseExit(Effect.fail("My Error")).then(console.log)
// ^? {_id: "Exit", _tag: "Failure", cause: { _id: "Cause", _tag: "Fail", failure: "My Error"}}




