import { PostgresDialect } from "kysely";
import { defineConfig } from "kysely-ctl";
import path from "path";
import { Pool } from "pg";
import { prettyError } from "@rpg/server/src/utils/pretty-error";

const pool = new Pool({
  application_name: "rpg-server",
  connectionString: process.env["DATABASE_URL"],
  log: console.log,
});

const dialect = new PostgresDialect({
  pool,
});

export default defineConfig({
  dialect,
  migrations: {
    migrationFolder: "src/migrations",
  },
  plugins: [],
  seeds: {
    seedFolder: "seeds",
  },
});

// catch errors in nodejs
process.on("unhandledRejection", async (reason, promise) => {
  prettyError(reason as Error);

  promise.catch(prettyError);

  process.exit(0);
});
