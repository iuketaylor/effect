# Effect Run Functions

Effects are jus descriptions of computations, they don't actually run until you tell them to.

To execute an effect, you can use one of the many `run` functions provided by the Effect module.

>[!TIP]
>The recommended approach is to design your program with the majority of its logic as Effects. It’s advisable to use the `run*` functions closer to the “edge” of your program. This approach allows for greater flexibility in executing your program and building sophisticated effects.
