import { Effect } from "effect";

/*
 * rynSyncExit:
 * Runs an effect synchronously and returns the result as an Exit type, which represents the outcome (success or failure) of the effect
 * Use this to find out whether an effect succeeded or failed
 * Exit type represents the result of the effect
 * If the effect succeeds, the result is wrapped in a `Success`
 * If the effect fails, the failure information is provided as a `Failure` containing a Cause type
 */

console.log(Effect.runSyncExit(Effect.succeed(1)));
// ^? {_id: "Exit", _tag: "Success", value: 1}

console.log(Effect.runSyncExit(Effect.fail("My Error")));
// ^? {_id: "Exit", "_tag": "Failure", Cause: { _id: "Cause", _tag: "Fail", failure: "My Error"}}
