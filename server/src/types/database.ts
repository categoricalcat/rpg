import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from "kysely";

export enum Types {
  ADMIN = "admin",
  PRIVATE = "private",
  PUBLIC = "public",
  TEXT = "text",
  IMAGE = "image",
  AUDIO = "audio",
  ROLL = "roll",
  REACTION = "reaction",
}

export interface Database {
  user: UserTable;
}

// This interface describes the `User` table to Kysely. Table
// interfaces should only be used in the `Database` type above
// and never as a result type of a query!. See the `User`,
// `NewUser` and `UserUpdate` types below.
export interface UserTable {
  id: Generated<number>;
  name: string;
  image: string;
  seed: number;
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;
