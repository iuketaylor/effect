# Running Effects

Effects are just descriptions of computations, they don't actually run until you tell them to.

To execute an effect, you can use one of the many `run` functions provided by the Effect module.

## The Point

```typescript
// This creates an Effect but doesn't run it
const effect = Effect.succeed("Hello World")

// Nothing happens! The Effect is just sitting there
console.log(effect) // logs: [object Object]

// You need a run function to actually execute it
Effect.runSync(effect) // NOW it runs and returns "Hello World"
```

## Why You Need Run Functions

- **Effects are lazy** - they don't execute when created
- **Run functions are eager** - they actually execute the Effect
- **You control when things happen** - no surprise side effects

Without run functions, your Effects would just be fancy objects that never do anything.

>[!TIP]
>The recommended approach is to design your program with the majority of its logic as Effects. It's advisable to use the `run*` functions closer to the "edge" of your program. This approach allows for greater flexibility in executing your program and building sophisticated effects.
