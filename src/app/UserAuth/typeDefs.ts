import { gql } from 'graphql-modules'

export default gql`
  type UserAuth {
    id: Int!
    createdAt: String!
    updatedAt: String!
    password: String!
  }

  extend type User {
    UserAuth: UserAuth!
  }

  extend type Query {
    findUniqueUserAuth(where: UserAuthWhereUniqueInput!): UserAuth
    findFirstUserAuth(
      where: UserAuthWhereInput
      orderBy: [UserAuthOrderByWithRelationInput]
      cursor: UserAuthWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserAuthScalarFieldEnum]
    ): UserAuth
    findManyUserAuth(
      where: UserAuthWhereInput
      orderBy: [UserAuthOrderByWithRelationInput]
      cursor: UserAuthWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserAuthScalarFieldEnum]
    ): [UserAuth!]
    findManyUserAuthCount(
      where: UserAuthWhereInput
      orderBy: [UserAuthOrderByWithRelationInput]
      cursor: UserAuthWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserAuthScalarFieldEnum]
    ): Int!
    aggregateUserAuth(
      where: UserAuthWhereInput
      orderBy: [UserAuthOrderByWithRelationInput]
      cursor: UserAuthWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUserAuth
  }

  extend type Mutation {
    createOneUserAuth(data: UserAuthCreateInput!): UserAuth!
    updateOneUserAuth(
      data: UserAuthUpdateInput!
      where: UserAuthWhereUniqueInput!
    ): UserAuth!
    deleteOneUserAuth(where: UserAuthWhereUniqueInput!): UserAuth
    upsertOneUserAuth(
      where: UserAuthWhereUniqueInput!
      create: UserAuthCreateInput!
      update: UserAuthUpdateInput!
    ): UserAuth
    deleteManyUserAuth(where: UserAuthWhereInput): BatchPayload
    updateManyUserAuth(
      data: UserAuthUpdateManyMutationInput!
      where: UserAuthWhereInput
    ): BatchPayload
  }
`
