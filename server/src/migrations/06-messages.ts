import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("messages")
    .addColumn("id", "integer", (col) =>
      col.primaryKey().generatedByDefaultAsIdentity()
    )
    .addColumn("sender_id", "integer", (col) => col.references("users.id"))
    .addColumn("user_id", "integer", (col) => col.references("users.id"))
    .addColumn("channel_id", "integer", (col) => col.references("channels.id"))
    .addColumn("parent_id", "integer", (col) => col.references("messages.id"))
    .addColumn("created_at", "timestamp", (col) => col.defaultTo(sql`now()`))
    .addColumn("updated_at", "timestamp", (col) => col.defaultTo(sql`now()`))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("messages").execute();
}
