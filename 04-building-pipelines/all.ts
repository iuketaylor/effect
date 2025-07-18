import { Effect } from "effect";

/*
 * All:
 * Combines multiple effects into one
 * Use this when you need to run multiple effects and combine their results into a single output
 */

// Simulated function to read configuration from a file
const webConfig = Effect.promise(() =>
  Promise.resolve({ dbConnection: "localhost", port: 8080 }),
);

// Simulated function to connect to database
const checkDatabaseConnectivity = Effect.promise(() =>
  Promise.resolve("Connected to Database"),
);

// Combine both effects to perform startup checks
const startupChecks = Effect.all([webConfig, checkDatabaseConnectivity]);

Effect.runPromise(startupChecks).then(([config, dbStatus]) => {
  console.log(
    `Configuration: ${JSON.stringify(config)}\nDB Status: ${dbStatus}`,
  );
});
// ^? Output: Configuration: {"dbConnection": "localhost", "port": 8080} DB Status: Connected to Database
