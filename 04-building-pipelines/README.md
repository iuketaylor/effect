# Building Pipelines

Effect provides operators like `map`, `flatMap`, and `pipe` to chain Effects together into sequential pipelines.

## The Point

```typescript
// Instead of nested function calls
const result = saveUser(validateUser(transformUser(getUser("123"))))

// You can build readable pipelines
const pipeline = pipe(
  getUser("123"),
  Effect.map(transformUser),
  Effect.flatMap(validateUser),
  Effect.flatMap(saveUser)
)

// Or use generators for even cleaner syntax
const pipeline = Effect.gen(function* () {
  const user = yield* getUser("123")
  const transformed = transformUser(user)
  const validated = yield* validateUser(transformed)
  return yield* saveUser(validated)
})
```

## Why You Need Pipelines

- **Sequential operations** - Chain multiple Effects together in order
- **Automatic error handling** - If any step fails, the whole pipeline fails
- **Composable** - Build complex workflows from simple building blocks
- **Type safe** - Each step knows exactly what it receives and returns

Without pipelines, you'd have to manually handle errors and compose Effects, which gets messy quickly.

>[!TIP]
>The recommended approach is to use pipelines for sequential Effect operations. Use `pipe` with operators for functional style, or `Effect.gen` for imperative style - choose what feels more natural for your team.
