import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("channels_roles")
    .addColumn("role_id", "integer", (col) => col.references("roles.id"))
    .addColumn("channel_id", "integer", (col) => col.references("channels.id"))
    .addPrimaryKeyConstraint("channels_roles_pkey", ["role_id", "channel_id"])
    .execute();

  await db.schema
    .createTable("sheets_roles")
    .addColumn("role_id", "integer", (col) => col.references("roles.id"))
    .addColumn("sheet_id", "integer", (col) => col.references("sheets.id"))
    .addPrimaryKeyConstraint("sheets_roles_pkey", ["role_id", "sheet_id"])
    .execute();

  await db.schema
    .createTable("users_roles_rooms")
    .addColumn("user_id", "integer", (col) => col.references("users.id"))
    .addColumn("role_id", "integer", (col) => col.references("roles.id"))
    .addColumn("room_id", "integer", (col) => col.references("rooms.id"))
    .addPrimaryKeyConstraint("users_roles_rooms_pkey", [
      "user_id",
      "role_id",
      "room_id",
    ])
    .execute();

  await db.schema
    .createTable("messages_roles")
    .addColumn("message_id", "integer", (col) => col.references("messages.id"))
    .addColumn("role_id", "integer", (col) => col.references("roles.id"))
    .addPrimaryKeyConstraint("messages_roles_pkey", ["message_id", "role_id"])
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("messages_roles").execute();
  await db.schema.dropTable("users_roles_rooms").execute();
  await db.schema.dropTable("sheets_roles").execute();
  await db.schema.dropTable("channels_roles").execute();
}
