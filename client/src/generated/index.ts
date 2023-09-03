import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateMessage = {
  __typename?: 'AggregateMessage';
  _count?: Maybe<MessageCountAggregate>;
  _max?: Maybe<MessageMaxAggregate>;
  _min?: Maybe<MessageMinAggregate>;
};

export type AggregateRace = {
  __typename?: 'AggregateRace';
  _count?: Maybe<RaceCountAggregate>;
  _max?: Maybe<RaceMaxAggregate>;
  _min?: Maybe<RaceMinAggregate>;
};

export type AggregateSheet = {
  __typename?: 'AggregateSheet';
  _count?: Maybe<SheetCountAggregate>;
  _max?: Maybe<SheetMaxAggregate>;
  _min?: Maybe<SheetMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type Attribute = {
  __typename?: 'Attribute';
  CHA: Scalars['Int'];
  CON: Scalars['Int'];
  DEX: Scalars['Int'];
  INT: Scalars['Int'];
  PWR: Scalars['Int'];
  STR: Scalars['Int'];
  WIS: Scalars['Int'];
};

export type AttributeCompositeFilter = {
  equals?: InputMaybe<AttributeObjectEqualityInput>;
  is?: InputMaybe<AttributeWhereInput>;
  isNot?: InputMaybe<AttributeWhereInput>;
};

export type AttributeCreateEnvelopeInput = {
  set?: InputMaybe<AttributeCreateInput>;
};

export type AttributeCreateInput = {
  CHA: Scalars['Int'];
  CON: Scalars['Int'];
  DEX: Scalars['Int'];
  INT: Scalars['Int'];
  PWR: Scalars['Int'];
  STR: Scalars['Int'];
  WIS: Scalars['Int'];
};

export type AttributeObjectEqualityInput = {
  CHA: Scalars['Int'];
  CON: Scalars['Int'];
  DEX: Scalars['Int'];
  INT: Scalars['Int'];
  PWR: Scalars['Int'];
  STR: Scalars['Int'];
  WIS: Scalars['Int'];
};

export type AttributeOrderByInput = {
  CHA?: InputMaybe<SortOrder>;
  CON?: InputMaybe<SortOrder>;
  DEX?: InputMaybe<SortOrder>;
  INT?: InputMaybe<SortOrder>;
  PWR?: InputMaybe<SortOrder>;
  STR?: InputMaybe<SortOrder>;
  WIS?: InputMaybe<SortOrder>;
};

export type AttributeUpdateEnvelopeInput = {
  set?: InputMaybe<AttributeCreateInput>;
  update?: InputMaybe<AttributeUpdateInput>;
};

export type AttributeUpdateInput = {
  CHA?: InputMaybe<IntFieldUpdateOperationsInput>;
  CON?: InputMaybe<IntFieldUpdateOperationsInput>;
  DEX?: InputMaybe<IntFieldUpdateOperationsInput>;
  INT?: InputMaybe<IntFieldUpdateOperationsInput>;
  PWR?: InputMaybe<IntFieldUpdateOperationsInput>;
  STR?: InputMaybe<IntFieldUpdateOperationsInput>;
  WIS?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AttributeWhereInput = {
  AND?: InputMaybe<Array<AttributeWhereInput>>;
  CHA?: InputMaybe<IntFilter>;
  CON?: InputMaybe<IntFilter>;
  DEX?: InputMaybe<IntFilter>;
  INT?: InputMaybe<IntFilter>;
  NOT?: InputMaybe<Array<AttributeWhereInput>>;
  OR?: InputMaybe<Array<AttributeWhereInput>>;
  PWR?: InputMaybe<IntFilter>;
  STR?: InputMaybe<IntFilter>;
  WIS?: InputMaybe<IntFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Item = {
  __typename?: 'Item';
  active?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  exertion: Scalars['String'];
  modifier?: Maybe<Attribute>;
  name: Scalars['String'];
  photo: Scalars['String'];
  type: Types;
};

export type ItemCreateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  description: Scalars['String'];
  exertion: Scalars['String'];
  modifier?: InputMaybe<AttributeCreateInput>;
  name: Scalars['String'];
  photo: Scalars['String'];
  type: Types;
};

export type ItemObjectEqualityInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  description: Scalars['String'];
  exertion: Scalars['String'];
  modifier?: InputMaybe<AttributeObjectEqualityInput>;
  name: Scalars['String'];
  photo: Scalars['String'];
  type: Types;
};

export type ItemOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  rName: Scalars['String'];
  receiver: User;
  sName: Scalars['String'];
  sender: User;
  text: Scalars['String'];
};

export type MessageCountAggregate = {
  __typename?: 'MessageCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  rName: Scalars['Int'];
  sName: Scalars['Int'];
  text: Scalars['Int'];
};

export type MessageCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rName?: InputMaybe<SortOrder>;
  sName?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type MessageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  receiver: UserCreateNestedOneWithoutReceivedInput;
  sender: UserCreateNestedOneWithoutSentInput;
  text: Scalars['String'];
};

export type MessageCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  rName: Scalars['String'];
  sName: Scalars['String'];
  text: Scalars['String'];
};

export type MessageCreateManyReceiverInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  sName: Scalars['String'];
  text: Scalars['String'];
};

export type MessageCreateManyReceiverInputEnvelope = {
  data: Array<MessageCreateManyReceiverInput>;
};

export type MessageCreateManySenderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  rName: Scalars['String'];
  text: Scalars['String'];
};

export type MessageCreateManySenderInputEnvelope = {
  data: Array<MessageCreateManySenderInput>;
};

export type MessageCreateNestedManyWithoutReceiverInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutReceiverInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutReceiverInput>>;
  createMany?: InputMaybe<MessageCreateManyReceiverInputEnvelope>;
};

export type MessageCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutSenderInput>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
};

export type MessageCreateOrConnectWithoutReceiverInput = {
  create: MessageCreateWithoutReceiverInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutSenderInput = {
  create: MessageCreateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutReceiverInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  sender: UserCreateNestedOneWithoutSentInput;
  text: Scalars['String'];
};

export type MessageCreateWithoutSenderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  receiver: UserCreateNestedOneWithoutReceivedInput;
  text: Scalars['String'];
};

export type MessageGroupBy = {
  __typename?: 'MessageGroupBy';
  _count?: Maybe<MessageCountAggregate>;
  _max?: Maybe<MessageMaxAggregate>;
  _min?: Maybe<MessageMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  rName: Scalars['String'];
  sName: Scalars['String'];
  text: Scalars['String'];
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageMaxAggregate = {
  __typename?: 'MessageMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  rName?: Maybe<Scalars['String']>;
  sName?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type MessageMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rName?: InputMaybe<SortOrder>;
  sName?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type MessageMinAggregate = {
  __typename?: 'MessageMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  rName?: Maybe<Scalars['String']>;
  sName?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type MessageMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rName?: InputMaybe<SortOrder>;
  sName?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithAggregationInput = {
  _count?: InputMaybe<MessageCountOrderByAggregateInput>;
  _max?: InputMaybe<MessageMaxOrderByAggregateInput>;
  _min?: InputMaybe<MessageMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rName?: InputMaybe<SortOrder>;
  sName?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rName?: InputMaybe<SortOrder>;
  receiver?: InputMaybe<UserOrderByWithRelationInput>;
  sName?: InputMaybe<SortOrder>;
  sender?: InputMaybe<UserOrderByWithRelationInput>;
  text?: InputMaybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  RName = 'rName',
  SName = 'sName',
  Text = 'text'
}

export type MessageScalarWhereInput = {
  AND?: InputMaybe<Array<MessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<MessageScalarWhereInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  rName?: InputMaybe<StringFilter>;
  sName?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
};

export type MessageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  rName?: InputMaybe<StringWithAggregatesFilter>;
  sName?: InputMaybe<StringWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
};

export type MessageUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  receiver?: InputMaybe<UserUpdateOneRequiredWithoutReceivedNestedInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutSentNestedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateManyWithWhereWithoutReceiverInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithWhereWithoutSenderInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutReceiverNestedInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutReceiverInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutReceiverInput>>;
  createMany?: InputMaybe<MessageCreateManyReceiverInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutReceiverInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutReceiverInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutReceiverInput>>;
};

export type MessageUpdateManyWithoutSenderNestedInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutSenderInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutSenderInput>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutSenderInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutSenderInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutSenderInput>>;
};

export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
  data: MessageUpdateWithoutReceiverInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
  data: MessageUpdateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithoutReceiverInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutSentNestedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpdateWithoutSenderInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  receiver?: InputMaybe<UserUpdateOneRequiredWithoutReceivedNestedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
  create: MessageCreateWithoutReceiverInput;
  update: MessageUpdateWithoutReceiverInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
  create: MessageCreateWithoutSenderInput;
  update: MessageUpdateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  rName?: InputMaybe<StringFilter>;
  receiver?: InputMaybe<UserRelationFilter>;
  sName?: InputMaybe<StringFilter>;
  sender?: InputMaybe<UserRelationFilter>;
  text?: InputMaybe<StringFilter>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyMessage: AffectedRowsOutput;
  createManyRace: AffectedRowsOutput;
  createManySheet: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneMessage: Message;
  createOneRace: Race;
  createOneSheet: Sheet;
  createOneUser: User;
  deleteManyMessage: AffectedRowsOutput;
  deleteManyRace: AffectedRowsOutput;
  deleteManySheet: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneMessage?: Maybe<Message>;
  deleteOneRace?: Maybe<Race>;
  deleteOneSheet?: Maybe<Sheet>;
  deleteOneUser?: Maybe<User>;
  updateManyMessage: AffectedRowsOutput;
  updateManyRace: AffectedRowsOutput;
  updateManySheet: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneMessage?: Maybe<Message>;
  updateOneRace?: Maybe<Race>;
  updateOneSheet?: Maybe<Sheet>;
  updateOneUser?: Maybe<User>;
  upsertOneMessage: Message;
  upsertOneRace: Race;
  upsertOneSheet: Sheet;
  upsertOneUser: User;
};


export type MutationCreateManyMessageArgs = {
  data: Array<MessageCreateManyInput>;
};


export type MutationCreateManyRaceArgs = {
  data: Array<RaceCreateManyInput>;
};


export type MutationCreateManySheetArgs = {
  data: Array<SheetCreateManyInput>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationCreateOneMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateOneRaceArgs = {
  data: RaceCreateInput;
};


export type MutationCreateOneSheetArgs = {
  data: SheetCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyMessageArgs = {
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationDeleteManyRaceArgs = {
  where?: InputMaybe<RaceWhereInput>;
};


export type MutationDeleteManySheetArgs = {
  where?: InputMaybe<SheetWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationDeleteOneRaceArgs = {
  where: RaceWhereUniqueInput;
};


export type MutationDeleteOneSheetArgs = {
  where: SheetWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyMessageArgs = {
  data: MessageUpdateManyMutationInput;
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationUpdateManyRaceArgs = {
  data: RaceUpdateManyMutationInput;
  where?: InputMaybe<RaceWhereInput>;
};


export type MutationUpdateManySheetArgs = {
  data: SheetUpdateManyMutationInput;
  where?: InputMaybe<SheetWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpdateOneRaceArgs = {
  data: RaceUpdateInput;
  where: RaceWhereUniqueInput;
};


export type MutationUpdateOneSheetArgs = {
  data: SheetUpdateInput;
  where: SheetWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneMessageArgs = {
  create: MessageCreateInput;
  update: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpsertOneRaceArgs = {
  create: RaceCreateInput;
  update: RaceUpdateInput;
  where: RaceWhereUniqueInput;
};


export type MutationUpsertOneSheetArgs = {
  create: SheetCreateInput;
  update: SheetUpdateInput;
  where: SheetWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateMessage: AggregateMessage;
  aggregateRace: AggregateRace;
  aggregateSheet: AggregateSheet;
  aggregateUser: AggregateUser;
  findFirstMessage?: Maybe<Message>;
  findFirstMessageOrThrow?: Maybe<Message>;
  findFirstRace?: Maybe<Race>;
  findFirstRaceOrThrow?: Maybe<Race>;
  findFirstSheet?: Maybe<Sheet>;
  findFirstSheetOrThrow?: Maybe<Sheet>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  getMessage?: Maybe<Message>;
  getRace?: Maybe<Race>;
  getSheet?: Maybe<Sheet>;
  getUser?: Maybe<User>;
  groupByMessage: Array<MessageGroupBy>;
  groupByRace: Array<RaceGroupBy>;
  groupBySheet: Array<SheetGroupBy>;
  groupByUser: Array<UserGroupBy>;
  message?: Maybe<Message>;
  messages: Array<Message>;
  race?: Maybe<Race>;
  races: Array<Race>;
  sheet?: Maybe<Sheet>;
  sheets: Array<Sheet>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryAggregateRaceArgs = {
  cursor?: InputMaybe<RaceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RaceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RaceWhereInput>;
};


export type QueryAggregateSheetArgs = {
  cursor?: InputMaybe<SheetWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SheetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SheetWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindFirstMessageOrThrowArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindFirstRaceArgs = {
  cursor?: InputMaybe<RaceWhereUniqueInput>;
  distinct?: InputMaybe<Array<RaceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RaceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RaceWhereInput>;
};


export type QueryFindFirstRaceOrThrowArgs = {
  cursor?: InputMaybe<RaceWhereUniqueInput>;
  distinct?: InputMaybe<Array<RaceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RaceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RaceWhereInput>;
};


export type QueryFindFirstSheetArgs = {
  cursor?: InputMaybe<SheetWhereUniqueInput>;
  distinct?: InputMaybe<Array<SheetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SheetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SheetWhereInput>;
};


export type QueryFindFirstSheetOrThrowArgs = {
  cursor?: InputMaybe<SheetWhereUniqueInput>;
  distinct?: InputMaybe<Array<SheetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SheetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SheetWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryGetRaceArgs = {
  where: RaceWhereUniqueInput;
};


export type QueryGetSheetArgs = {
  where: SheetWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByMessageArgs = {
  by: Array<MessageScalarFieldEnum>;
  having?: InputMaybe<MessageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryGroupByRaceArgs = {
  by: Array<RaceScalarFieldEnum>;
  having?: InputMaybe<RaceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RaceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RaceWhereInput>;
};


export type QueryGroupBySheetArgs = {
  by: Array<SheetScalarFieldEnum>;
  having?: InputMaybe<SheetScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SheetOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SheetWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryRaceArgs = {
  where: RaceWhereUniqueInput;
};


export type QueryRacesArgs = {
  cursor?: InputMaybe<RaceWhereUniqueInput>;
  distinct?: InputMaybe<Array<RaceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RaceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RaceWhereInput>;
};


export type QuerySheetArgs = {
  where: SheetWhereUniqueInput;
};


export type QuerySheetsArgs = {
  cursor?: InputMaybe<SheetWhereUniqueInput>;
  distinct?: InputMaybe<Array<SheetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SheetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SheetWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Race = {
  __typename?: 'Race';
  Sheet: Array<Sheet>;
  _count?: Maybe<RaceCount>;
  attributes: Attribute;
  description: Scalars['String'];
  name: Scalars['String'];
};


export type RaceSheetArgs = {
  cursor?: InputMaybe<SheetWhereUniqueInput>;
  distinct?: InputMaybe<Array<SheetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SheetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SheetWhereInput>;
};

export type RaceCount = {
  __typename?: 'RaceCount';
  Sheet: Scalars['Int'];
};

export type RaceCountAggregate = {
  __typename?: 'RaceCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  name: Scalars['Int'];
};

export type RaceCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type RaceCreateInput = {
  Sheet?: InputMaybe<SheetCreateNestedManyWithoutRaceInput>;
  attributes: AttributeCreateEnvelopeInput;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type RaceCreateManyInput = {
  attributes: AttributeCreateEnvelopeInput;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type RaceCreateNestedOneWithoutSheetInput = {
  connect?: InputMaybe<RaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RaceCreateOrConnectWithoutSheetInput>;
  create?: InputMaybe<RaceCreateWithoutSheetInput>;
};

export type RaceCreateOrConnectWithoutSheetInput = {
  create: RaceCreateWithoutSheetInput;
  where: RaceWhereUniqueInput;
};

export type RaceCreateWithoutSheetInput = {
  attributes: AttributeCreateEnvelopeInput;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type RaceGroupBy = {
  __typename?: 'RaceGroupBy';
  _count?: Maybe<RaceCountAggregate>;
  _max?: Maybe<RaceMaxAggregate>;
  _min?: Maybe<RaceMinAggregate>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type RaceMaxAggregate = {
  __typename?: 'RaceMaxAggregate';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type RaceMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type RaceMinAggregate = {
  __typename?: 'RaceMinAggregate';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type RaceMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type RaceOrderByWithAggregationInput = {
  _count?: InputMaybe<RaceCountOrderByAggregateInput>;
  _max?: InputMaybe<RaceMaxOrderByAggregateInput>;
  _min?: InputMaybe<RaceMinOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type RaceOrderByWithRelationInput = {
  Sheet?: InputMaybe<SheetOrderByRelationAggregateInput>;
  attributes?: InputMaybe<AttributeOrderByInput>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type RaceRelationFilter = {
  is?: InputMaybe<RaceWhereInput>;
  isNot?: InputMaybe<RaceWhereInput>;
};

export enum RaceScalarFieldEnum {
  Description = 'description',
  Name = 'name'
}

export type RaceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RaceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RaceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RaceScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type RaceUpdateInput = {
  Sheet?: InputMaybe<SheetUpdateManyWithoutRaceNestedInput>;
  attributes?: InputMaybe<AttributeUpdateEnvelopeInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RaceUpdateManyMutationInput = {
  attributes?: InputMaybe<AttributeUpdateEnvelopeInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RaceUpdateOneRequiredWithoutSheetNestedInput = {
  connect?: InputMaybe<RaceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RaceCreateOrConnectWithoutSheetInput>;
  create?: InputMaybe<RaceCreateWithoutSheetInput>;
  update?: InputMaybe<RaceUpdateWithoutSheetInput>;
  upsert?: InputMaybe<RaceUpsertWithoutSheetInput>;
};

export type RaceUpdateWithoutSheetInput = {
  attributes?: InputMaybe<AttributeUpdateEnvelopeInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RaceUpsertWithoutSheetInput = {
  create: RaceCreateWithoutSheetInput;
  update: RaceUpdateWithoutSheetInput;
};

export type RaceWhereInput = {
  AND?: InputMaybe<Array<RaceWhereInput>>;
  NOT?: InputMaybe<Array<RaceWhereInput>>;
  OR?: InputMaybe<Array<RaceWhereInput>>;
  Sheet?: InputMaybe<SheetListRelationFilter>;
  attributes?: InputMaybe<AttributeCompositeFilter>;
  description?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type RaceWhereUniqueInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type Sheet = {
  __typename?: 'Sheet';
  attribute: Attribute;
  description: Scalars['String'];
  items: Array<Item>;
  name: Scalars['String'];
  photo: Scalars['String'];
  rName: Scalars['String'];
  race: Race;
  user: User;
  userName: Scalars['String'];
};

export type SheetCountAggregate = {
  __typename?: 'SheetCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  name: Scalars['Int'];
  photo: Scalars['Int'];
  rName: Scalars['Int'];
  userName: Scalars['Int'];
};

export type SheetCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  rName?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type SheetCreateInput = {
  attribute: AttributeCreateEnvelopeInput;
  description: Scalars['String'];
  items?: InputMaybe<Array<ItemCreateInput>>;
  name: Scalars['String'];
  photo: Scalars['String'];
  race: RaceCreateNestedOneWithoutSheetInput;
  user: UserCreateNestedOneWithoutSheetInput;
};

export type SheetCreateManyInput = {
  attribute: AttributeCreateEnvelopeInput;
  description: Scalars['String'];
  items?: InputMaybe<Array<ItemCreateInput>>;
  name: Scalars['String'];
  photo: Scalars['String'];
  rName: Scalars['String'];
  userName: Scalars['String'];
};

export type SheetCreateManyRaceInput = {
  attribute: AttributeCreateEnvelopeInput;
  description: Scalars['String'];
  items?: InputMaybe<Array<ItemCreateInput>>;
  name: Scalars['String'];
  photo: Scalars['String'];
  userName: Scalars['String'];
};

export type SheetCreateManyRaceInputEnvelope = {
  data: Array<SheetCreateManyRaceInput>;
};

export type SheetCreateManyUserInput = {
  attribute: AttributeCreateEnvelopeInput;
  description: Scalars['String'];
  items?: InputMaybe<Array<ItemCreateInput>>;
  name: Scalars['String'];
  photo: Scalars['String'];
  rName: Scalars['String'];
};

export type SheetCreateManyUserInputEnvelope = {
  data: Array<SheetCreateManyUserInput>;
};

export type SheetCreateNestedManyWithoutRaceInput = {
  connect?: InputMaybe<Array<SheetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SheetCreateOrConnectWithoutRaceInput>>;
  create?: InputMaybe<Array<SheetCreateWithoutRaceInput>>;
  createMany?: InputMaybe<SheetCreateManyRaceInputEnvelope>;
};

export type SheetCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SheetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SheetCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SheetCreateWithoutUserInput>>;
  createMany?: InputMaybe<SheetCreateManyUserInputEnvelope>;
};

export type SheetCreateOrConnectWithoutRaceInput = {
  create: SheetCreateWithoutRaceInput;
  where: SheetWhereUniqueInput;
};

export type SheetCreateOrConnectWithoutUserInput = {
  create: SheetCreateWithoutUserInput;
  where: SheetWhereUniqueInput;
};

export type SheetCreateWithoutRaceInput = {
  attribute: AttributeCreateEnvelopeInput;
  description: Scalars['String'];
  items?: InputMaybe<Array<ItemCreateInput>>;
  name: Scalars['String'];
  photo: Scalars['String'];
  user: UserCreateNestedOneWithoutSheetInput;
};

export type SheetCreateWithoutUserInput = {
  attribute: AttributeCreateEnvelopeInput;
  description: Scalars['String'];
  items?: InputMaybe<Array<ItemCreateInput>>;
  name: Scalars['String'];
  photo: Scalars['String'];
  race: RaceCreateNestedOneWithoutSheetInput;
};

export type SheetGroupBy = {
  __typename?: 'SheetGroupBy';
  _count?: Maybe<SheetCountAggregate>;
  _max?: Maybe<SheetMaxAggregate>;
  _min?: Maybe<SheetMinAggregate>;
  description: Scalars['String'];
  name: Scalars['String'];
  photo: Scalars['String'];
  rName: Scalars['String'];
  userName: Scalars['String'];
};

export type SheetListRelationFilter = {
  every?: InputMaybe<SheetWhereInput>;
  none?: InputMaybe<SheetWhereInput>;
  some?: InputMaybe<SheetWhereInput>;
};

export type SheetMaxAggregate = {
  __typename?: 'SheetMaxAggregate';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  rName?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type SheetMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  rName?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type SheetMinAggregate = {
  __typename?: 'SheetMinAggregate';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  rName?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type SheetMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  rName?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type SheetOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SheetOrderByWithAggregationInput = {
  _count?: InputMaybe<SheetCountOrderByAggregateInput>;
  _max?: InputMaybe<SheetMaxOrderByAggregateInput>;
  _min?: InputMaybe<SheetMinOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  rName?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
};

export type SheetOrderByWithRelationInput = {
  attribute?: InputMaybe<AttributeOrderByInput>;
  description?: InputMaybe<SortOrder>;
  items?: InputMaybe<ItemOrderByCompositeAggregateInput>;
  name?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  rName?: InputMaybe<SortOrder>;
  race?: InputMaybe<RaceOrderByWithRelationInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userName?: InputMaybe<SortOrder>;
};

export enum SheetScalarFieldEnum {
  Description = 'description',
  Name = 'name',
  Photo = 'photo',
  RName = 'rName',
  UserName = 'userName'
}

export type SheetScalarWhereInput = {
  AND?: InputMaybe<Array<SheetScalarWhereInput>>;
  NOT?: InputMaybe<Array<SheetScalarWhereInput>>;
  OR?: InputMaybe<Array<SheetScalarWhereInput>>;
  description?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringFilter>;
  rName?: InputMaybe<StringFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type SheetScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SheetScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SheetScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SheetScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  photo?: InputMaybe<StringWithAggregatesFilter>;
  rName?: InputMaybe<StringWithAggregatesFilter>;
  userName?: InputMaybe<StringWithAggregatesFilter>;
};

export type SheetUpdateInput = {
  attribute?: InputMaybe<AttributeUpdateEnvelopeInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Array<ItemCreateInput>>;
  photo?: InputMaybe<StringFieldUpdateOperationsInput>;
  race?: InputMaybe<RaceUpdateOneRequiredWithoutSheetNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSheetNestedInput>;
};

export type SheetUpdateManyMutationInput = {
  attribute?: InputMaybe<AttributeUpdateEnvelopeInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Array<ItemCreateInput>>;
  photo?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SheetUpdateManyWithWhereWithoutRaceInput = {
  data: SheetUpdateManyMutationInput;
  where: SheetScalarWhereInput;
};

export type SheetUpdateManyWithWhereWithoutUserInput = {
  data: SheetUpdateManyMutationInput;
  where: SheetScalarWhereInput;
};

export type SheetUpdateManyWithoutRaceNestedInput = {
  connect?: InputMaybe<Array<SheetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SheetCreateOrConnectWithoutRaceInput>>;
  create?: InputMaybe<Array<SheetCreateWithoutRaceInput>>;
  createMany?: InputMaybe<SheetCreateManyRaceInputEnvelope>;
  delete?: InputMaybe<Array<SheetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SheetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SheetWhereUniqueInput>>;
  set?: InputMaybe<Array<SheetWhereUniqueInput>>;
  update?: InputMaybe<Array<SheetUpdateWithWhereUniqueWithoutRaceInput>>;
  updateMany?: InputMaybe<Array<SheetUpdateManyWithWhereWithoutRaceInput>>;
  upsert?: InputMaybe<Array<SheetUpsertWithWhereUniqueWithoutRaceInput>>;
};

export type SheetUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SheetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SheetCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SheetCreateWithoutUserInput>>;
  createMany?: InputMaybe<SheetCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SheetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SheetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SheetWhereUniqueInput>>;
  set?: InputMaybe<Array<SheetWhereUniqueInput>>;
  update?: InputMaybe<Array<SheetUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SheetUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SheetUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SheetUpdateWithWhereUniqueWithoutRaceInput = {
  data: SheetUpdateWithoutRaceInput;
  where: SheetWhereUniqueInput;
};

export type SheetUpdateWithWhereUniqueWithoutUserInput = {
  data: SheetUpdateWithoutUserInput;
  where: SheetWhereUniqueInput;
};

export type SheetUpdateWithoutRaceInput = {
  attribute?: InputMaybe<AttributeUpdateEnvelopeInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Array<ItemCreateInput>>;
  photo?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSheetNestedInput>;
};

export type SheetUpdateWithoutUserInput = {
  attribute?: InputMaybe<AttributeUpdateEnvelopeInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  items?: InputMaybe<Array<ItemCreateInput>>;
  photo?: InputMaybe<StringFieldUpdateOperationsInput>;
  race?: InputMaybe<RaceUpdateOneRequiredWithoutSheetNestedInput>;
};

export type SheetUpsertWithWhereUniqueWithoutRaceInput = {
  create: SheetCreateWithoutRaceInput;
  update: SheetUpdateWithoutRaceInput;
  where: SheetWhereUniqueInput;
};

export type SheetUpsertWithWhereUniqueWithoutUserInput = {
  create: SheetCreateWithoutUserInput;
  update: SheetUpdateWithoutUserInput;
  where: SheetWhereUniqueInput;
};

export type SheetWhereInput = {
  AND?: InputMaybe<Array<SheetWhereInput>>;
  NOT?: InputMaybe<Array<SheetWhereInput>>;
  OR?: InputMaybe<Array<SheetWhereInput>>;
  attribute?: InputMaybe<AttributeCompositeFilter>;
  description?: InputMaybe<StringFilter>;
  items?: InputMaybe<Array<ItemObjectEqualityInput>>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringFilter>;
  rName?: InputMaybe<StringFilter>;
  race?: InputMaybe<RaceRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type SheetWhereUniqueInput = {
  name?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum Types {
  Item = 'ITEM',
  Spell = 'SPELL'
}

export type User = {
  __typename?: 'User';
  Received: Array<Message>;
  Sent: Array<Message>;
  Sheet: Array<Sheet>;
  _count?: Maybe<UserCount>;
  color?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type UserReceivedArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type UserSentArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type UserSheetArgs = {
  cursor?: InputMaybe<SheetWhereUniqueInput>;
  distinct?: InputMaybe<Array<SheetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SheetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SheetWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Received: Scalars['Int'];
  Sent: Scalars['Int'];
  Sheet: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  color: Scalars['Int'];
  name: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  Received?: InputMaybe<MessageCreateNestedManyWithoutReceiverInput>;
  Sent?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  Sheet?: InputMaybe<SheetCreateNestedManyWithoutUserInput>;
  color?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserCreateManyInput = {
  color?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserCreateNestedOneWithoutReceivedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReceivedInput>;
  create?: InputMaybe<UserCreateWithoutReceivedInput>;
};

export type UserCreateNestedOneWithoutSentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSentInput>;
  create?: InputMaybe<UserCreateWithoutSentInput>;
};

export type UserCreateNestedOneWithoutSheetInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSheetInput>;
  create?: InputMaybe<UserCreateWithoutSheetInput>;
};

export type UserCreateOrConnectWithoutReceivedInput = {
  create: UserCreateWithoutReceivedInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSentInput = {
  create: UserCreateWithoutSentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSheetInput = {
  create: UserCreateWithoutSheetInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutReceivedInput = {
  Sent?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  Sheet?: InputMaybe<SheetCreateNestedManyWithoutUserInput>;
  color?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserCreateWithoutSentInput = {
  Received?: InputMaybe<MessageCreateNestedManyWithoutReceiverInput>;
  Sheet?: InputMaybe<SheetCreateNestedManyWithoutUserInput>;
  color?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserCreateWithoutSheetInput = {
  Received?: InputMaybe<MessageCreateNestedManyWithoutReceiverInput>;
  Sent?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  color?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  color?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  color?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  color?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  Received?: InputMaybe<MessageOrderByRelationAggregateInput>;
  Sent?: InputMaybe<MessageOrderByRelationAggregateInput>;
  Sheet?: InputMaybe<SheetOrderByRelationAggregateInput>;
  color?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Color = 'color',
  Name = 'name'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  color?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  Received?: InputMaybe<MessageUpdateManyWithoutReceiverNestedInput>;
  Sent?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  Sheet?: InputMaybe<SheetUpdateManyWithoutUserNestedInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutReceivedNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReceivedInput>;
  create?: InputMaybe<UserCreateWithoutReceivedInput>;
  update?: InputMaybe<UserUpdateWithoutReceivedInput>;
  upsert?: InputMaybe<UserUpsertWithoutReceivedInput>;
};

export type UserUpdateOneRequiredWithoutSentNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSentInput>;
  create?: InputMaybe<UserCreateWithoutSentInput>;
  update?: InputMaybe<UserUpdateWithoutSentInput>;
  upsert?: InputMaybe<UserUpsertWithoutSentInput>;
};

export type UserUpdateOneRequiredWithoutSheetNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSheetInput>;
  create?: InputMaybe<UserCreateWithoutSheetInput>;
  update?: InputMaybe<UserUpdateWithoutSheetInput>;
  upsert?: InputMaybe<UserUpsertWithoutSheetInput>;
};

export type UserUpdateWithoutReceivedInput = {
  Sent?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  Sheet?: InputMaybe<SheetUpdateManyWithoutUserNestedInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSentInput = {
  Received?: InputMaybe<MessageUpdateManyWithoutReceiverNestedInput>;
  Sheet?: InputMaybe<SheetUpdateManyWithoutUserNestedInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSheetInput = {
  Received?: InputMaybe<MessageUpdateManyWithoutReceiverNestedInput>;
  Sent?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutReceivedInput = {
  create: UserCreateWithoutReceivedInput;
  update: UserUpdateWithoutReceivedInput;
};

export type UserUpsertWithoutSentInput = {
  create: UserCreateWithoutSentInput;
  update: UserUpdateWithoutSentInput;
};

export type UserUpsertWithoutSheetInput = {
  create: UserCreateWithoutSheetInput;
  update: UserUpdateWithoutSheetInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Received?: InputMaybe<MessageListRelationFilter>;
  Sent?: InputMaybe<MessageListRelationFilter>;
  Sheet?: InputMaybe<SheetListRelationFilter>;
  color?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  name?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AffectedRowsOutput: ResolverTypeWrapper<AffectedRowsOutput>;
  AggregateMessage: ResolverTypeWrapper<AggregateMessage>;
  AggregateRace: ResolverTypeWrapper<AggregateRace>;
  AggregateSheet: ResolverTypeWrapper<AggregateSheet>;
  AggregateUser: ResolverTypeWrapper<AggregateUser>;
  Attribute: ResolverTypeWrapper<Attribute>;
  AttributeCompositeFilter: AttributeCompositeFilter;
  AttributeCreateEnvelopeInput: AttributeCreateEnvelopeInput;
  AttributeCreateInput: AttributeCreateInput;
  AttributeObjectEqualityInput: AttributeObjectEqualityInput;
  AttributeOrderByInput: AttributeOrderByInput;
  AttributeUpdateEnvelopeInput: AttributeUpdateEnvelopeInput;
  AttributeUpdateInput: AttributeUpdateInput;
  AttributeWhereInput: AttributeWhereInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  Item: ResolverTypeWrapper<Item>;
  ItemCreateInput: ItemCreateInput;
  ItemObjectEqualityInput: ItemObjectEqualityInput;
  ItemOrderByCompositeAggregateInput: ItemOrderByCompositeAggregateInput;
  Message: ResolverTypeWrapper<Message>;
  MessageCountAggregate: ResolverTypeWrapper<MessageCountAggregate>;
  MessageCountOrderByAggregateInput: MessageCountOrderByAggregateInput;
  MessageCreateInput: MessageCreateInput;
  MessageCreateManyInput: MessageCreateManyInput;
  MessageCreateManyReceiverInput: MessageCreateManyReceiverInput;
  MessageCreateManyReceiverInputEnvelope: MessageCreateManyReceiverInputEnvelope;
  MessageCreateManySenderInput: MessageCreateManySenderInput;
  MessageCreateManySenderInputEnvelope: MessageCreateManySenderInputEnvelope;
  MessageCreateNestedManyWithoutReceiverInput: MessageCreateNestedManyWithoutReceiverInput;
  MessageCreateNestedManyWithoutSenderInput: MessageCreateNestedManyWithoutSenderInput;
  MessageCreateOrConnectWithoutReceiverInput: MessageCreateOrConnectWithoutReceiverInput;
  MessageCreateOrConnectWithoutSenderInput: MessageCreateOrConnectWithoutSenderInput;
  MessageCreateWithoutReceiverInput: MessageCreateWithoutReceiverInput;
  MessageCreateWithoutSenderInput: MessageCreateWithoutSenderInput;
  MessageGroupBy: ResolverTypeWrapper<MessageGroupBy>;
  MessageListRelationFilter: MessageListRelationFilter;
  MessageMaxAggregate: ResolverTypeWrapper<MessageMaxAggregate>;
  MessageMaxOrderByAggregateInput: MessageMaxOrderByAggregateInput;
  MessageMinAggregate: ResolverTypeWrapper<MessageMinAggregate>;
  MessageMinOrderByAggregateInput: MessageMinOrderByAggregateInput;
  MessageOrderByRelationAggregateInput: MessageOrderByRelationAggregateInput;
  MessageOrderByWithAggregationInput: MessageOrderByWithAggregationInput;
  MessageOrderByWithRelationInput: MessageOrderByWithRelationInput;
  MessageScalarFieldEnum: MessageScalarFieldEnum;
  MessageScalarWhereInput: MessageScalarWhereInput;
  MessageScalarWhereWithAggregatesInput: MessageScalarWhereWithAggregatesInput;
  MessageUpdateInput: MessageUpdateInput;
  MessageUpdateManyMutationInput: MessageUpdateManyMutationInput;
  MessageUpdateManyWithWhereWithoutReceiverInput: MessageUpdateManyWithWhereWithoutReceiverInput;
  MessageUpdateManyWithWhereWithoutSenderInput: MessageUpdateManyWithWhereWithoutSenderInput;
  MessageUpdateManyWithoutReceiverNestedInput: MessageUpdateManyWithoutReceiverNestedInput;
  MessageUpdateManyWithoutSenderNestedInput: MessageUpdateManyWithoutSenderNestedInput;
  MessageUpdateWithWhereUniqueWithoutReceiverInput: MessageUpdateWithWhereUniqueWithoutReceiverInput;
  MessageUpdateWithWhereUniqueWithoutSenderInput: MessageUpdateWithWhereUniqueWithoutSenderInput;
  MessageUpdateWithoutReceiverInput: MessageUpdateWithoutReceiverInput;
  MessageUpdateWithoutSenderInput: MessageUpdateWithoutSenderInput;
  MessageUpsertWithWhereUniqueWithoutReceiverInput: MessageUpsertWithWhereUniqueWithoutReceiverInput;
  MessageUpsertWithWhereUniqueWithoutSenderInput: MessageUpsertWithWhereUniqueWithoutSenderInput;
  MessageWhereInput: MessageWhereInput;
  MessageWhereUniqueInput: MessageWhereUniqueInput;
  Mutation: ResolverTypeWrapper<{}>;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NestedStringNullableWithAggregatesFilter: NestedStringNullableWithAggregatesFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  Race: ResolverTypeWrapper<Race>;
  RaceCount: ResolverTypeWrapper<RaceCount>;
  RaceCountAggregate: ResolverTypeWrapper<RaceCountAggregate>;
  RaceCountOrderByAggregateInput: RaceCountOrderByAggregateInput;
  RaceCreateInput: RaceCreateInput;
  RaceCreateManyInput: RaceCreateManyInput;
  RaceCreateNestedOneWithoutSheetInput: RaceCreateNestedOneWithoutSheetInput;
  RaceCreateOrConnectWithoutSheetInput: RaceCreateOrConnectWithoutSheetInput;
  RaceCreateWithoutSheetInput: RaceCreateWithoutSheetInput;
  RaceGroupBy: ResolverTypeWrapper<RaceGroupBy>;
  RaceMaxAggregate: ResolverTypeWrapper<RaceMaxAggregate>;
  RaceMaxOrderByAggregateInput: RaceMaxOrderByAggregateInput;
  RaceMinAggregate: ResolverTypeWrapper<RaceMinAggregate>;
  RaceMinOrderByAggregateInput: RaceMinOrderByAggregateInput;
  RaceOrderByWithAggregationInput: RaceOrderByWithAggregationInput;
  RaceOrderByWithRelationInput: RaceOrderByWithRelationInput;
  RaceRelationFilter: RaceRelationFilter;
  RaceScalarFieldEnum: RaceScalarFieldEnum;
  RaceScalarWhereWithAggregatesInput: RaceScalarWhereWithAggregatesInput;
  RaceUpdateInput: RaceUpdateInput;
  RaceUpdateManyMutationInput: RaceUpdateManyMutationInput;
  RaceUpdateOneRequiredWithoutSheetNestedInput: RaceUpdateOneRequiredWithoutSheetNestedInput;
  RaceUpdateWithoutSheetInput: RaceUpdateWithoutSheetInput;
  RaceUpsertWithoutSheetInput: RaceUpsertWithoutSheetInput;
  RaceWhereInput: RaceWhereInput;
  RaceWhereUniqueInput: RaceWhereUniqueInput;
  Sheet: ResolverTypeWrapper<Sheet>;
  SheetCountAggregate: ResolverTypeWrapper<SheetCountAggregate>;
  SheetCountOrderByAggregateInput: SheetCountOrderByAggregateInput;
  SheetCreateInput: SheetCreateInput;
  SheetCreateManyInput: SheetCreateManyInput;
  SheetCreateManyRaceInput: SheetCreateManyRaceInput;
  SheetCreateManyRaceInputEnvelope: SheetCreateManyRaceInputEnvelope;
  SheetCreateManyUserInput: SheetCreateManyUserInput;
  SheetCreateManyUserInputEnvelope: SheetCreateManyUserInputEnvelope;
  SheetCreateNestedManyWithoutRaceInput: SheetCreateNestedManyWithoutRaceInput;
  SheetCreateNestedManyWithoutUserInput: SheetCreateNestedManyWithoutUserInput;
  SheetCreateOrConnectWithoutRaceInput: SheetCreateOrConnectWithoutRaceInput;
  SheetCreateOrConnectWithoutUserInput: SheetCreateOrConnectWithoutUserInput;
  SheetCreateWithoutRaceInput: SheetCreateWithoutRaceInput;
  SheetCreateWithoutUserInput: SheetCreateWithoutUserInput;
  SheetGroupBy: ResolverTypeWrapper<SheetGroupBy>;
  SheetListRelationFilter: SheetListRelationFilter;
  SheetMaxAggregate: ResolverTypeWrapper<SheetMaxAggregate>;
  SheetMaxOrderByAggregateInput: SheetMaxOrderByAggregateInput;
  SheetMinAggregate: ResolverTypeWrapper<SheetMinAggregate>;
  SheetMinOrderByAggregateInput: SheetMinOrderByAggregateInput;
  SheetOrderByRelationAggregateInput: SheetOrderByRelationAggregateInput;
  SheetOrderByWithAggregationInput: SheetOrderByWithAggregationInput;
  SheetOrderByWithRelationInput: SheetOrderByWithRelationInput;
  SheetScalarFieldEnum: SheetScalarFieldEnum;
  SheetScalarWhereInput: SheetScalarWhereInput;
  SheetScalarWhereWithAggregatesInput: SheetScalarWhereWithAggregatesInput;
  SheetUpdateInput: SheetUpdateInput;
  SheetUpdateManyMutationInput: SheetUpdateManyMutationInput;
  SheetUpdateManyWithWhereWithoutRaceInput: SheetUpdateManyWithWhereWithoutRaceInput;
  SheetUpdateManyWithWhereWithoutUserInput: SheetUpdateManyWithWhereWithoutUserInput;
  SheetUpdateManyWithoutRaceNestedInput: SheetUpdateManyWithoutRaceNestedInput;
  SheetUpdateManyWithoutUserNestedInput: SheetUpdateManyWithoutUserNestedInput;
  SheetUpdateWithWhereUniqueWithoutRaceInput: SheetUpdateWithWhereUniqueWithoutRaceInput;
  SheetUpdateWithWhereUniqueWithoutUserInput: SheetUpdateWithWhereUniqueWithoutUserInput;
  SheetUpdateWithoutRaceInput: SheetUpdateWithoutRaceInput;
  SheetUpdateWithoutUserInput: SheetUpdateWithoutUserInput;
  SheetUpsertWithWhereUniqueWithoutRaceInput: SheetUpsertWithWhereUniqueWithoutRaceInput;
  SheetUpsertWithWhereUniqueWithoutUserInput: SheetUpsertWithWhereUniqueWithoutUserInput;
  SheetWhereInput: SheetWhereInput;
  SheetWhereUniqueInput: SheetWhereUniqueInput;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableWithAggregatesFilter: StringNullableWithAggregatesFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  Types: Types;
  User: ResolverTypeWrapper<User>;
  UserCount: ResolverTypeWrapper<UserCount>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutReceivedInput: UserCreateNestedOneWithoutReceivedInput;
  UserCreateNestedOneWithoutSentInput: UserCreateNestedOneWithoutSentInput;
  UserCreateNestedOneWithoutSheetInput: UserCreateNestedOneWithoutSheetInput;
  UserCreateOrConnectWithoutReceivedInput: UserCreateOrConnectWithoutReceivedInput;
  UserCreateOrConnectWithoutSentInput: UserCreateOrConnectWithoutSentInput;
  UserCreateOrConnectWithoutSheetInput: UserCreateOrConnectWithoutSheetInput;
  UserCreateWithoutReceivedInput: UserCreateWithoutReceivedInput;
  UserCreateWithoutSentInput: UserCreateWithoutSentInput;
  UserCreateWithoutSheetInput: UserCreateWithoutSheetInput;
  UserGroupBy: ResolverTypeWrapper<UserGroupBy>;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserUpdateOneRequiredWithoutReceivedNestedInput: UserUpdateOneRequiredWithoutReceivedNestedInput;
  UserUpdateOneRequiredWithoutSentNestedInput: UserUpdateOneRequiredWithoutSentNestedInput;
  UserUpdateOneRequiredWithoutSheetNestedInput: UserUpdateOneRequiredWithoutSheetNestedInput;
  UserUpdateWithoutReceivedInput: UserUpdateWithoutReceivedInput;
  UserUpdateWithoutSentInput: UserUpdateWithoutSentInput;
  UserUpdateWithoutSheetInput: UserUpdateWithoutSheetInput;
  UserUpsertWithoutReceivedInput: UserUpsertWithoutReceivedInput;
  UserUpsertWithoutSentInput: UserUpsertWithoutSentInput;
  UserUpsertWithoutSheetInput: UserUpsertWithoutSheetInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AffectedRowsOutput: AffectedRowsOutput;
  AggregateMessage: AggregateMessage;
  AggregateRace: AggregateRace;
  AggregateSheet: AggregateSheet;
  AggregateUser: AggregateUser;
  Attribute: Attribute;
  AttributeCompositeFilter: AttributeCompositeFilter;
  AttributeCreateEnvelopeInput: AttributeCreateEnvelopeInput;
  AttributeCreateInput: AttributeCreateInput;
  AttributeObjectEqualityInput: AttributeObjectEqualityInput;
  AttributeOrderByInput: AttributeOrderByInput;
  AttributeUpdateEnvelopeInput: AttributeUpdateEnvelopeInput;
  AttributeUpdateInput: AttributeUpdateInput;
  AttributeWhereInput: AttributeWhereInput;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  Int: Scalars['Int'];
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  Item: Item;
  ItemCreateInput: ItemCreateInput;
  ItemObjectEqualityInput: ItemObjectEqualityInput;
  ItemOrderByCompositeAggregateInput: ItemOrderByCompositeAggregateInput;
  Message: Message;
  MessageCountAggregate: MessageCountAggregate;
  MessageCountOrderByAggregateInput: MessageCountOrderByAggregateInput;
  MessageCreateInput: MessageCreateInput;
  MessageCreateManyInput: MessageCreateManyInput;
  MessageCreateManyReceiverInput: MessageCreateManyReceiverInput;
  MessageCreateManyReceiverInputEnvelope: MessageCreateManyReceiverInputEnvelope;
  MessageCreateManySenderInput: MessageCreateManySenderInput;
  MessageCreateManySenderInputEnvelope: MessageCreateManySenderInputEnvelope;
  MessageCreateNestedManyWithoutReceiverInput: MessageCreateNestedManyWithoutReceiverInput;
  MessageCreateNestedManyWithoutSenderInput: MessageCreateNestedManyWithoutSenderInput;
  MessageCreateOrConnectWithoutReceiverInput: MessageCreateOrConnectWithoutReceiverInput;
  MessageCreateOrConnectWithoutSenderInput: MessageCreateOrConnectWithoutSenderInput;
  MessageCreateWithoutReceiverInput: MessageCreateWithoutReceiverInput;
  MessageCreateWithoutSenderInput: MessageCreateWithoutSenderInput;
  MessageGroupBy: MessageGroupBy;
  MessageListRelationFilter: MessageListRelationFilter;
  MessageMaxAggregate: MessageMaxAggregate;
  MessageMaxOrderByAggregateInput: MessageMaxOrderByAggregateInput;
  MessageMinAggregate: MessageMinAggregate;
  MessageMinOrderByAggregateInput: MessageMinOrderByAggregateInput;
  MessageOrderByRelationAggregateInput: MessageOrderByRelationAggregateInput;
  MessageOrderByWithAggregationInput: MessageOrderByWithAggregationInput;
  MessageOrderByWithRelationInput: MessageOrderByWithRelationInput;
  MessageScalarWhereInput: MessageScalarWhereInput;
  MessageScalarWhereWithAggregatesInput: MessageScalarWhereWithAggregatesInput;
  MessageUpdateInput: MessageUpdateInput;
  MessageUpdateManyMutationInput: MessageUpdateManyMutationInput;
  MessageUpdateManyWithWhereWithoutReceiverInput: MessageUpdateManyWithWhereWithoutReceiverInput;
  MessageUpdateManyWithWhereWithoutSenderInput: MessageUpdateManyWithWhereWithoutSenderInput;
  MessageUpdateManyWithoutReceiverNestedInput: MessageUpdateManyWithoutReceiverNestedInput;
  MessageUpdateManyWithoutSenderNestedInput: MessageUpdateManyWithoutSenderNestedInput;
  MessageUpdateWithWhereUniqueWithoutReceiverInput: MessageUpdateWithWhereUniqueWithoutReceiverInput;
  MessageUpdateWithWhereUniqueWithoutSenderInput: MessageUpdateWithWhereUniqueWithoutSenderInput;
  MessageUpdateWithoutReceiverInput: MessageUpdateWithoutReceiverInput;
  MessageUpdateWithoutSenderInput: MessageUpdateWithoutSenderInput;
  MessageUpsertWithWhereUniqueWithoutReceiverInput: MessageUpsertWithWhereUniqueWithoutReceiverInput;
  MessageUpsertWithWhereUniqueWithoutSenderInput: MessageUpsertWithWhereUniqueWithoutSenderInput;
  MessageWhereInput: MessageWhereInput;
  MessageWhereUniqueInput: MessageWhereUniqueInput;
  Mutation: {};
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NestedStringNullableWithAggregatesFilter: NestedStringNullableWithAggregatesFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Query: {};
  Race: Race;
  RaceCount: RaceCount;
  RaceCountAggregate: RaceCountAggregate;
  RaceCountOrderByAggregateInput: RaceCountOrderByAggregateInput;
  RaceCreateInput: RaceCreateInput;
  RaceCreateManyInput: RaceCreateManyInput;
  RaceCreateNestedOneWithoutSheetInput: RaceCreateNestedOneWithoutSheetInput;
  RaceCreateOrConnectWithoutSheetInput: RaceCreateOrConnectWithoutSheetInput;
  RaceCreateWithoutSheetInput: RaceCreateWithoutSheetInput;
  RaceGroupBy: RaceGroupBy;
  RaceMaxAggregate: RaceMaxAggregate;
  RaceMaxOrderByAggregateInput: RaceMaxOrderByAggregateInput;
  RaceMinAggregate: RaceMinAggregate;
  RaceMinOrderByAggregateInput: RaceMinOrderByAggregateInput;
  RaceOrderByWithAggregationInput: RaceOrderByWithAggregationInput;
  RaceOrderByWithRelationInput: RaceOrderByWithRelationInput;
  RaceRelationFilter: RaceRelationFilter;
  RaceScalarWhereWithAggregatesInput: RaceScalarWhereWithAggregatesInput;
  RaceUpdateInput: RaceUpdateInput;
  RaceUpdateManyMutationInput: RaceUpdateManyMutationInput;
  RaceUpdateOneRequiredWithoutSheetNestedInput: RaceUpdateOneRequiredWithoutSheetNestedInput;
  RaceUpdateWithoutSheetInput: RaceUpdateWithoutSheetInput;
  RaceUpsertWithoutSheetInput: RaceUpsertWithoutSheetInput;
  RaceWhereInput: RaceWhereInput;
  RaceWhereUniqueInput: RaceWhereUniqueInput;
  Sheet: Sheet;
  SheetCountAggregate: SheetCountAggregate;
  SheetCountOrderByAggregateInput: SheetCountOrderByAggregateInput;
  SheetCreateInput: SheetCreateInput;
  SheetCreateManyInput: SheetCreateManyInput;
  SheetCreateManyRaceInput: SheetCreateManyRaceInput;
  SheetCreateManyRaceInputEnvelope: SheetCreateManyRaceInputEnvelope;
  SheetCreateManyUserInput: SheetCreateManyUserInput;
  SheetCreateManyUserInputEnvelope: SheetCreateManyUserInputEnvelope;
  SheetCreateNestedManyWithoutRaceInput: SheetCreateNestedManyWithoutRaceInput;
  SheetCreateNestedManyWithoutUserInput: SheetCreateNestedManyWithoutUserInput;
  SheetCreateOrConnectWithoutRaceInput: SheetCreateOrConnectWithoutRaceInput;
  SheetCreateOrConnectWithoutUserInput: SheetCreateOrConnectWithoutUserInput;
  SheetCreateWithoutRaceInput: SheetCreateWithoutRaceInput;
  SheetCreateWithoutUserInput: SheetCreateWithoutUserInput;
  SheetGroupBy: SheetGroupBy;
  SheetListRelationFilter: SheetListRelationFilter;
  SheetMaxAggregate: SheetMaxAggregate;
  SheetMaxOrderByAggregateInput: SheetMaxOrderByAggregateInput;
  SheetMinAggregate: SheetMinAggregate;
  SheetMinOrderByAggregateInput: SheetMinOrderByAggregateInput;
  SheetOrderByRelationAggregateInput: SheetOrderByRelationAggregateInput;
  SheetOrderByWithAggregationInput: SheetOrderByWithAggregationInput;
  SheetOrderByWithRelationInput: SheetOrderByWithRelationInput;
  SheetScalarWhereInput: SheetScalarWhereInput;
  SheetScalarWhereWithAggregatesInput: SheetScalarWhereWithAggregatesInput;
  SheetUpdateInput: SheetUpdateInput;
  SheetUpdateManyMutationInput: SheetUpdateManyMutationInput;
  SheetUpdateManyWithWhereWithoutRaceInput: SheetUpdateManyWithWhereWithoutRaceInput;
  SheetUpdateManyWithWhereWithoutUserInput: SheetUpdateManyWithWhereWithoutUserInput;
  SheetUpdateManyWithoutRaceNestedInput: SheetUpdateManyWithoutRaceNestedInput;
  SheetUpdateManyWithoutUserNestedInput: SheetUpdateManyWithoutUserNestedInput;
  SheetUpdateWithWhereUniqueWithoutRaceInput: SheetUpdateWithWhereUniqueWithoutRaceInput;
  SheetUpdateWithWhereUniqueWithoutUserInput: SheetUpdateWithWhereUniqueWithoutUserInput;
  SheetUpdateWithoutRaceInput: SheetUpdateWithoutRaceInput;
  SheetUpdateWithoutUserInput: SheetUpdateWithoutUserInput;
  SheetUpsertWithWhereUniqueWithoutRaceInput: SheetUpsertWithWhereUniqueWithoutRaceInput;
  SheetUpsertWithWhereUniqueWithoutUserInput: SheetUpsertWithWhereUniqueWithoutUserInput;
  SheetWhereInput: SheetWhereInput;
  SheetWhereUniqueInput: SheetWhereUniqueInput;
  String: Scalars['String'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableWithAggregatesFilter: StringNullableWithAggregatesFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  User: User;
  UserCount: UserCount;
  UserCountAggregate: UserCountAggregate;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutReceivedInput: UserCreateNestedOneWithoutReceivedInput;
  UserCreateNestedOneWithoutSentInput: UserCreateNestedOneWithoutSentInput;
  UserCreateNestedOneWithoutSheetInput: UserCreateNestedOneWithoutSheetInput;
  UserCreateOrConnectWithoutReceivedInput: UserCreateOrConnectWithoutReceivedInput;
  UserCreateOrConnectWithoutSentInput: UserCreateOrConnectWithoutSentInput;
  UserCreateOrConnectWithoutSheetInput: UserCreateOrConnectWithoutSheetInput;
  UserCreateWithoutReceivedInput: UserCreateWithoutReceivedInput;
  UserCreateWithoutSentInput: UserCreateWithoutSentInput;
  UserCreateWithoutSheetInput: UserCreateWithoutSheetInput;
  UserGroupBy: UserGroupBy;
  UserMaxAggregate: UserMaxAggregate;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinAggregate: UserMinAggregate;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserUpdateOneRequiredWithoutReceivedNestedInput: UserUpdateOneRequiredWithoutReceivedNestedInput;
  UserUpdateOneRequiredWithoutSentNestedInput: UserUpdateOneRequiredWithoutSentNestedInput;
  UserUpdateOneRequiredWithoutSheetNestedInput: UserUpdateOneRequiredWithoutSheetNestedInput;
  UserUpdateWithoutReceivedInput: UserUpdateWithoutReceivedInput;
  UserUpdateWithoutSentInput: UserUpdateWithoutSentInput;
  UserUpdateWithoutSheetInput: UserUpdateWithoutSheetInput;
  UserUpsertWithoutReceivedInput: UserUpsertWithoutReceivedInput;
  UserUpsertWithoutSentInput: UserUpsertWithoutSentInput;
  UserUpsertWithoutSheetInput: UserUpsertWithoutSheetInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

export type AffectedRowsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffectedRowsOutput'] = ResolversParentTypes['AffectedRowsOutput']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMessage'] = ResolversParentTypes['AggregateMessage']> = {
  _count?: Resolver<Maybe<ResolversTypes['MessageCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MessageMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MessageMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateRaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateRace'] = ResolversParentTypes['AggregateRace']> = {
  _count?: Resolver<Maybe<ResolversTypes['RaceCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['RaceMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['RaceMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateSheetResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateSheet'] = ResolversParentTypes['AggregateSheet']> = {
  _count?: Resolver<Maybe<ResolversTypes['SheetCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['SheetMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['SheetMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateUser'] = ResolversParentTypes['AggregateUser']> = {
  _count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  CHA?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  CON?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  DEX?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  INT?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  PWR?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  STR?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  WIS?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exertion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['Attribute']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Types'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageCountAggregate'] = ResolversParentTypes['MessageCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageGroupBy'] = ResolversParentTypes['MessageGroupBy']> = {
  _count?: Resolver<Maybe<ResolversTypes['MessageCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MessageMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MessageMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageMaxAggregate'] = ResolversParentTypes['MessageMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageMinAggregate'] = ResolversParentTypes['MessageMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createManyMessage?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMessageArgs, 'data'>>;
  createManyRace?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyRaceArgs, 'data'>>;
  createManySheet?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManySheetArgs, 'data'>>;
  createManyUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyUserArgs, 'data'>>;
  createOneMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationCreateOneMessageArgs, 'data'>>;
  createOneRace?: Resolver<ResolversTypes['Race'], ParentType, ContextType, RequireFields<MutationCreateOneRaceArgs, 'data'>>;
  createOneSheet?: Resolver<ResolversTypes['Sheet'], ParentType, ContextType, RequireFields<MutationCreateOneSheetArgs, 'data'>>;
  createOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateOneUserArgs, 'data'>>;
  deleteManyMessage?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMessageArgs>>;
  deleteManyRace?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyRaceArgs>>;
  deleteManySheet?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManySheetArgs>>;
  deleteManyUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyUserArgs>>;
  deleteOneMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationDeleteOneMessageArgs, 'where'>>;
  deleteOneRace?: Resolver<Maybe<ResolversTypes['Race']>, ParentType, ContextType, RequireFields<MutationDeleteOneRaceArgs, 'where'>>;
  deleteOneSheet?: Resolver<Maybe<ResolversTypes['Sheet']>, ParentType, ContextType, RequireFields<MutationDeleteOneSheetArgs, 'where'>>;
  deleteOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteOneUserArgs, 'where'>>;
  updateManyMessage?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMessageArgs, 'data'>>;
  updateManyRace?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyRaceArgs, 'data'>>;
  updateManySheet?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManySheetArgs, 'data'>>;
  updateManyUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyUserArgs, 'data'>>;
  updateOneMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationUpdateOneMessageArgs, 'data' | 'where'>>;
  updateOneRace?: Resolver<Maybe<ResolversTypes['Race']>, ParentType, ContextType, RequireFields<MutationUpdateOneRaceArgs, 'data' | 'where'>>;
  updateOneSheet?: Resolver<Maybe<ResolversTypes['Sheet']>, ParentType, ContextType, RequireFields<MutationUpdateOneSheetArgs, 'data' | 'where'>>;
  updateOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateOneUserArgs, 'data' | 'where'>>;
  upsertOneMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationUpsertOneMessageArgs, 'create' | 'update' | 'where'>>;
  upsertOneRace?: Resolver<ResolversTypes['Race'], ParentType, ContextType, RequireFields<MutationUpsertOneRaceArgs, 'create' | 'update' | 'where'>>;
  upsertOneSheet?: Resolver<ResolversTypes['Sheet'], ParentType, ContextType, RequireFields<MutationUpsertOneSheetArgs, 'create' | 'update' | 'where'>>;
  upsertOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpsertOneUserArgs, 'create' | 'update' | 'where'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  aggregateMessage?: Resolver<ResolversTypes['AggregateMessage'], ParentType, ContextType, Partial<QueryAggregateMessageArgs>>;
  aggregateRace?: Resolver<ResolversTypes['AggregateRace'], ParentType, ContextType, Partial<QueryAggregateRaceArgs>>;
  aggregateSheet?: Resolver<ResolversTypes['AggregateSheet'], ParentType, ContextType, Partial<QueryAggregateSheetArgs>>;
  aggregateUser?: Resolver<ResolversTypes['AggregateUser'], ParentType, ContextType, Partial<QueryAggregateUserArgs>>;
  findFirstMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, Partial<QueryFindFirstMessageArgs>>;
  findFirstMessageOrThrow?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, Partial<QueryFindFirstMessageOrThrowArgs>>;
  findFirstRace?: Resolver<Maybe<ResolversTypes['Race']>, ParentType, ContextType, Partial<QueryFindFirstRaceArgs>>;
  findFirstRaceOrThrow?: Resolver<Maybe<ResolversTypes['Race']>, ParentType, ContextType, Partial<QueryFindFirstRaceOrThrowArgs>>;
  findFirstSheet?: Resolver<Maybe<ResolversTypes['Sheet']>, ParentType, ContextType, Partial<QueryFindFirstSheetArgs>>;
  findFirstSheetOrThrow?: Resolver<Maybe<ResolversTypes['Sheet']>, ParentType, ContextType, Partial<QueryFindFirstSheetOrThrowArgs>>;
  findFirstUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryFindFirstUserArgs>>;
  findFirstUserOrThrow?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryFindFirstUserOrThrowArgs>>;
  getMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryGetMessageArgs, 'where'>>;
  getRace?: Resolver<Maybe<ResolversTypes['Race']>, ParentType, ContextType, RequireFields<QueryGetRaceArgs, 'where'>>;
  getSheet?: Resolver<Maybe<ResolversTypes['Sheet']>, ParentType, ContextType, RequireFields<QueryGetSheetArgs, 'where'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'where'>>;
  groupByMessage?: Resolver<Array<ResolversTypes['MessageGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMessageArgs, 'by'>>;
  groupByRace?: Resolver<Array<ResolversTypes['RaceGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByRaceArgs, 'by'>>;
  groupBySheet?: Resolver<Array<ResolversTypes['SheetGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupBySheetArgs, 'by'>>;
  groupByUser?: Resolver<Array<ResolversTypes['UserGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByUserArgs, 'by'>>;
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryMessageArgs, 'where'>>;
  messages?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType, Partial<QueryMessagesArgs>>;
  race?: Resolver<Maybe<ResolversTypes['Race']>, ParentType, ContextType, RequireFields<QueryRaceArgs, 'where'>>;
  races?: Resolver<Array<ResolversTypes['Race']>, ParentType, ContextType, Partial<QueryRacesArgs>>;
  sheet?: Resolver<Maybe<ResolversTypes['Sheet']>, ParentType, ContextType, RequireFields<QuerySheetArgs, 'where'>>;
  sheets?: Resolver<Array<ResolversTypes['Sheet']>, ParentType, ContextType, Partial<QuerySheetsArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type RaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Race'] = ResolversParentTypes['Race']> = {
  Sheet?: Resolver<Array<ResolversTypes['Sheet']>, ParentType, ContextType, Partial<RaceSheetArgs>>;
  _count?: Resolver<Maybe<ResolversTypes['RaceCount']>, ParentType, ContextType>;
  attributes?: Resolver<ResolversTypes['Attribute'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RaceCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['RaceCount'] = ResolversParentTypes['RaceCount']> = {
  Sheet?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RaceCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RaceCountAggregate'] = ResolversParentTypes['RaceCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RaceGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['RaceGroupBy'] = ResolversParentTypes['RaceGroupBy']> = {
  _count?: Resolver<Maybe<ResolversTypes['RaceCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['RaceMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['RaceMinAggregate']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RaceMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RaceMaxAggregate'] = ResolversParentTypes['RaceMaxAggregate']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RaceMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RaceMinAggregate'] = ResolversParentTypes['RaceMinAggregate']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SheetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sheet'] = ResolversParentTypes['Sheet']> = {
  attribute?: Resolver<ResolversTypes['Attribute'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  race?: Resolver<ResolversTypes['Race'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SheetCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SheetCountAggregate'] = ResolversParentTypes['SheetCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SheetGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['SheetGroupBy'] = ResolversParentTypes['SheetGroupBy']> = {
  _count?: Resolver<Maybe<ResolversTypes['SheetCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['SheetMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['SheetMinAggregate']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SheetMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SheetMaxAggregate'] = ResolversParentTypes['SheetMaxAggregate']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SheetMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SheetMinAggregate'] = ResolversParentTypes['SheetMinAggregate']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  Received?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType, Partial<UserReceivedArgs>>;
  Sent?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType, Partial<UserSentArgs>>;
  Sheet?: Resolver<Array<ResolversTypes['Sheet']>, ParentType, ContextType, Partial<UserSheetArgs>>;
  _count?: Resolver<Maybe<ResolversTypes['UserCount']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCount'] = ResolversParentTypes['UserCount']> = {
  Received?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Sent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Sheet?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupBy'] = ResolversParentTypes['UserGroupBy']> = {
  _count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AffectedRowsOutput?: AffectedRowsOutputResolvers<ContextType>;
  AggregateMessage?: AggregateMessageResolvers<ContextType>;
  AggregateRace?: AggregateRaceResolvers<ContextType>;
  AggregateSheet?: AggregateSheetResolvers<ContextType>;
  AggregateUser?: AggregateUserResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessageCountAggregate?: MessageCountAggregateResolvers<ContextType>;
  MessageGroupBy?: MessageGroupByResolvers<ContextType>;
  MessageMaxAggregate?: MessageMaxAggregateResolvers<ContextType>;
  MessageMinAggregate?: MessageMinAggregateResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Race?: RaceResolvers<ContextType>;
  RaceCount?: RaceCountResolvers<ContextType>;
  RaceCountAggregate?: RaceCountAggregateResolvers<ContextType>;
  RaceGroupBy?: RaceGroupByResolvers<ContextType>;
  RaceMaxAggregate?: RaceMaxAggregateResolvers<ContextType>;
  RaceMinAggregate?: RaceMinAggregateResolvers<ContextType>;
  Sheet?: SheetResolvers<ContextType>;
  SheetCountAggregate?: SheetCountAggregateResolvers<ContextType>;
  SheetGroupBy?: SheetGroupByResolvers<ContextType>;
  SheetMaxAggregate?: SheetMaxAggregateResolvers<ContextType>;
  SheetMinAggregate?: SheetMinAggregateResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCount?: UserCountResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserGroupBy?: UserGroupByResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
};


export type MessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type MessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: string, rName: string, sName: string, text: string, createdAt: any }> };

export type GetSheetQueryVariables = Exact<{
  where?: InputMaybe<SheetWhereInput>;
}>;


export type GetSheetQuery = { __typename?: 'Query', findFirstSheet?: { __typename?: 'Sheet', name: string, description: string, rName: string, photo: string, attribute: { __typename?: 'Attribute', STR: number, DEX: number, CON: number, INT: number, WIS: number, CHA: number, PWR: number }, items: Array<{ __typename?: 'Item', photo: string, name: string, description: string, exertion: string, active?: boolean | null, type: Types, modifier?: { __typename?: 'Attribute', STR: number, DEX: number, CON: number, INT: number, WIS: number, CHA: number, PWR: number } | null }>, race: { __typename?: 'Race', name: string, description: string, attributes: { __typename?: 'Attribute', STR: number, DEX: number, CON: number, INT: number, WIS: number, CHA: number, PWR: number } } } | null };

export type CreateOneMessageMutationVariables = Exact<{
  data: MessageCreateInput;
}>;


export type CreateOneMessageMutation = { __typename?: 'Mutation', createOneMessage: { __typename?: 'Message', rName: string, sName: string, text: string, createdAt: any, id: string } };


export const MessagesDocument = gql`
    query Messages {
  messages {
    id
    rName
    sName
    text
    createdAt
  }
}
    `;
export const GetSheetDocument = gql`
    query getSheet($where: SheetWhereInput) {
  findFirstSheet(where: $where) {
    name
    attribute {
      STR
      DEX
      CON
      INT
      WIS
      CHA
      PWR
    }
    description
    items {
      photo
      name
      description
      exertion
      active
      type
      modifier {
        STR
        DEX
        CON
        INT
        WIS
        CHA
        PWR
      }
    }
    race {
      name
      description
      attributes {
        STR
        DEX
        CON
        INT
        WIS
        CHA
        PWR
      }
    }
    rName
    photo
  }
}
    `;
export const CreateOneMessageDocument = gql`
    mutation CreateOneMessage($data: MessageCreateInput!) {
  createOneMessage(data: $data) {
    rName
    sName
    text
    createdAt
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Messages(variables?: MessagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MessagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MessagesQuery>(MessagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Messages', 'query');
    },
    getSheet(variables?: GetSheetQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSheetQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSheetQuery>(GetSheetDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSheet', 'query');
    },
    CreateOneMessage(variables: CreateOneMessageMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOneMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneMessageMutation>(CreateOneMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateOneMessage', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;