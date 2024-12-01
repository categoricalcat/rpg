import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("channels")
    .addColumn("id", "integer", (col) =>
      col.primaryKey().generatedByDefaultAsIdentity()
    )
    .addColumn("room_id", "integer", (col) => col.references("rooms.id"))
    .addColumn("name", "varchar")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("channels").execute();
}
