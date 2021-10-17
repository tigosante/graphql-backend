import { PrismaProvider } from '../Prisma.provider'

export default {
  Query: {
    findUniqueFavorite: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).favorite.findUnique(args)
    },
    findFirstFavorite: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).favorite.findFirst(args)
    },
    findManyFavorite: (_parent, args, { injector }: GraphQLModules.Context) => {
      return injector.get(PrismaProvider).favorite.findMany(args)
    },
    findManyFavoriteCount: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).favorite.count(args)
    },
    aggregateFavorite: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).favorite.aggregate(args)
    },
  },
  Mutation: {
    createOneFavorite: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).favorite.create(args)
    },
    updateOneFavorite: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).favorite.update(args)
    },
    deleteOneFavorite: async (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).favorite.delete(args)
    },
    upsertOneFavorite: async (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).favorite.upsert(args)
    },
    deleteManyFavorite: async (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).favorite.deleteMany(args)
    },
    updateManyFavorite: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).favorite.updateMany(args)
    },
  },
}
