import { Data, Effect } from "effect";

/*
 * Summary:
 * Promise and tryPromise create Effects that represent asynchronous computations
 * In normal TS - by default Promise<value> only provides the type Value for the resolved value which means errors are not reflected in the type system
 * Effect.promise and Effect.tryPromise allow you to explicitly handle success and failure cases while leveraging the type system to track errors
 */

/*
 * Promise:
 * Creates an Effect that represents an asynchronous computation guaranteed to succeed
 * Succeeds with a value of type T
 * Does not produce any expected error (E = never)
 */

const delay = (message: string) =>
  Effect.promise<string>(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(message);
        }, 2000);
      }),
  );
const program = delay("Async operation completed successfully");
// ^? Effect.Effect<string, never, never>

/*
 * tryPromise:
 * Creates an Effect that represents an asynchronous computation that might fail
 * Succeeds with a value of type Response
 * Might produce an error of type UnknownException
 */

const getTodo = (id: number) =>
  Effect.tryPromise(() =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
  );
const program1 = getTodo(1);
// ^? Effect.Effect<Response, UnknownException, never>

class NetworkError extends Data.TaggedError("NetworkError")<{
  message: string;
  cause: unknown;
}> { }

const getTodo2 = (id: number) =>
  Effect.tryPromise({
    try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
    catch: (unknown) =>
      new NetworkError({
        message: `Failed to fetch todo ${id}`,
        cause: "Network connection failed",
      }),
  });
const program2 = getTodo2(1);
// ^? Effect.Effect<Response, NetworkError, never>
