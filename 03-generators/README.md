# Using Generators

Effects are just descriptions of computations, they don't actually run until you tell them to.

Effect provides `Effect.gen` which allows you to write Effects using generator functions for a more imperative, async/await-like syntax.

## The Point

```typescript
// Instead of chaining with pipe and flatMap
const pipeline = pipe(
  getUser("123"),
  Effect.flatMap(user => validateUser(user)),
  Effect.flatMap(user => saveUser(user))
)

// You can write it like this with generators
const pipeline = Effect.gen(function* () {
  const user = yield* getUser("123")
  const validUser = yield* validateUser(user)
  const result = yield* saveUser(validUser)
  return result
})
```

## Why You Need Generators

- **Familiar syntax** - Looks like regular imperative code
- **Easier to read** - No deep nesting or complex pipe chains
- **Better debugging** - Step through code line by line
- **Error handling** - Exceptions are automatically caught and converted to Effect failures

Without generators, you'd need to use `pipe` and `flatMap` everywhere, which can get verbose and hard to follow.

>[!TIP]
>The recommended approach is to use generators for complex Effect workflows where readability matters. They're especially useful when you have multiple sequential operations or complex control flow.
