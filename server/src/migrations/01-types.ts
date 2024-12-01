import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  // Create types enum type
  await sql`CREATE TYPE "types" AS ENUM (
    'admin',
    'private',
    'public',
    'text',
    'roll',
    'reaction',
    'image',
    'audio'
  )`.execute(db);
}

export async function down(db: Kysely<any>): Promise<void> {
  await sql`DROP TYPE "types"`.execute(db);
}
