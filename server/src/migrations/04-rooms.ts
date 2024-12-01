import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  // Create tables
  await db.schema
    .createTable("rooms")
    .addColumn("id", "integer", (col) =>
      col.primaryKey().generatedByDefaultAsIdentity()
    )
    .addColumn("name", "varchar")
    .addColumn("image", "varchar")
    .addColumn("description", "varchar")
    .addColumn("created_at", "timestamp", (col) => col.defaultTo(sql`now()`))
    .addColumn("updated_at", "timestamp", (col) => col.defaultTo(sql`now()`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("rooms").execute();
}
