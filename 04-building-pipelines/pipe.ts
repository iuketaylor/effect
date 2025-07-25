import { pipe } from "effect";

/*
 * Pipe:
 * Utility function that allows us to compose functions in a readable, sequential manner
 * Takes the output of one function and passes it as the input to the next function in the pipeline
 */

const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2;

const result = pipe(5, addOne, double); // equivalent to double(addOne(5))
console.log(result);
// ^? Output: 12
