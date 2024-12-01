import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("roles")
    .addColumn("id", "integer", (col) =>
      col.primaryKey().generatedByDefaultAsIdentity()
    )
    .addColumn("name", sql`types`)
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("roles").execute();
}
