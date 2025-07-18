# Control Flow

Effect provides operators for conditional logic, loops, and error handling to build complex workflows while maintaining type safety.

## The Point

```typescript
// Instead of mixing regular control flow with Effects
const result = someCondition 
  ? Effect.runSync(getAdminData())
  : Effect.runSync(getUserData())

// You can keep everything as Effects
const pipeline = Effect.if(
  someCondition,
  () => getAdminData(),
  () => getUserData()
)

// Or use generators for natural control flow
const pipeline = Effect.gen(function* () {
  if (someCondition) {
    return yield* getAdminData()
  } else {
    return yield* getUserData()
  }
})
```

## Why You Need Control Flow

- **Conditional execution** - Choose which Effects to run based on conditions
- **Error recovery** - Handle failures gracefully with fallback logic
- **Loops and iteration** - Process collections of data with Effects
- **Type safety** - All branches maintain proper error and dependency tracking

Without control flow operators, you'd have to break out of the Effect system or create complex nested pipelines.

>[!TIP]
>The recommended approach is to use Effect's control flow operators for simple cases, or generators for complex conditional logic. Both approaches keep your entire workflow within the Effect system.
