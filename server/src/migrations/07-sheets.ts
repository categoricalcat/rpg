import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("sheets")
    .addColumn("id", "integer", (col) =>
      col.primaryKey().generatedByDefaultAsIdentity()
    )
    .addColumn("raw", "varchar")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("sheets").execute();
}
