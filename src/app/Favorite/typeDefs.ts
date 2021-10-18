import { gql } from 'graphql-modules'

export default gql`
  type Favorite {
    id: Int!
    gitRepositoryIds: [Int!]!
    gitUserIds: [Int!]!
    userId: Int!
  }

  extend type User {
    Favorite: Favorite
  }

  extend type Query {
    findUniqueFavorite(where: FavoriteWhereUniqueInput!): Favorite
    findFirstFavorite(
      where: FavoriteWhereInput
      orderBy: [FavoriteOrderByWithRelationInput]
      cursor: FavoriteWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FavoriteScalarFieldEnum]
    ): Favorite
    findManyFavorite(
      where: FavoriteWhereInput
      orderBy: [FavoriteOrderByWithRelationInput]
      cursor: FavoriteWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FavoriteScalarFieldEnum]
    ): [Favorite!]
    findManyFavoriteCount(
      where: FavoriteWhereInput
      orderBy: [FavoriteOrderByWithRelationInput]
      cursor: FavoriteWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FavoriteScalarFieldEnum]
    ): Int!
    aggregateFavorite(
      where: FavoriteWhereInput
      orderBy: [FavoriteOrderByWithRelationInput]
      cursor: FavoriteWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateFavorite
  }

  extend type Mutation {
    createOneFavorite(data: FavoriteCreateInput!): Favorite!
    updateOneFavorite(
      data: FavoriteUpdateInput!
      where: FavoriteWhereUniqueInput!
    ): Favorite!
    deleteOneFavorite(where: FavoriteWhereUniqueInput!): Favorite
    upsertOneFavorite(
      where: FavoriteWhereUniqueInput!
      create: FavoriteCreateInput!
      update: FavoriteUpdateInput!
    ): Favorite
    deleteManyFavorite(where: FavoriteWhereInput): BatchPayload
    updateManyFavorite(
      data: FavoriteUpdateManyMutationInput!
      where: FavoriteWhereInput
    ): BatchPayload
  }
`
