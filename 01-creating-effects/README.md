# Creating Effects

Effects are just descriptions of computations, they don't actually run until you tell them to.

Effect provides various constructors to create Effects that represent different types of computations.

## The Point

```typescript
// Create an Effect that represents a successful computation
const success = Effect.succeed("Hello World")

// Create an Effect that represents a failed computation  
const failure = Effect.fail("Something went wrong")

// Create an Effect that wraps side-effectful code
const sideEffect = Effect.sync(() => console.log("Running!"))

// Nothing happens until you run them
Effect.runSync(success)   // Returns "Hello World"
Effect.runSync(sideEffect) // Logs "Running!" and returns void
```

## Why You Need Effect Constructors

- **Lift values into Effect context** - Turn regular values/errors into Effects
- **Wrap side-effectful code** - Make impure operations composable
- **Handle async operations** - Convert Promises to Effects with proper error handling
- **Create uniform pipelines** - Everything becomes an Effect that can be composed

>[!TIP]
>The recommended approach is to design your program with the majority of its logic as Effects. Use Effect constructors to wrap your existing code and create new Effect-based logic.
