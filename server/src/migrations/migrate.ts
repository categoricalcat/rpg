import * as path from "path";
import { Pool } from "pg";
import { promises as fs } from "fs";
import {
  Kysely,
  Migrator,
  PostgresDialect,
  FileMigrationProvider,
} from "kysely";
import { Database } from "@src/types/database";
import { prettyError } from "@src/utils/pretty-error";

const pool = new Pool({
  host: "localhost",
  database: "rpg",
});

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool,
  }),
});

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    // This needs to be an absolute path.
    migrationFolder: path.join(__dirname, "src/migrations"),
  }),
});

migrator
  .migrateToLatest()
  .then(({ results, error }) => {
    if (error) {
      prettyError(error as Error);
      process.exit(1);
    }

    results?.forEach((it) => {
      if (it.status === "Success") {
        console.log(
          `migration "${it.migrationName}" was executed successfully`
        );
      } else if (it.status === "Error") {
        console.error(`failed to execute migration "${it.migrationName}"`);
      }
    });
  })
  .finally(() => {
    db.destroy();
  });
