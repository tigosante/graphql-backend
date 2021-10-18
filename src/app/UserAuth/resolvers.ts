import { PrismaProvider } from '../Prisma.provider'

export default {
  Query: {
    findUniqueUserAuth: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).userAuth.findUnique(args)
    },
    findFirstUserAuth: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).userAuth.findFirst(args)
    },
    findManyUserAuth: (_parent, args, { injector }: GraphQLModules.Context) => {
      return injector.get(PrismaProvider).userAuth.findMany(args)
    },
    findManyUserAuthCount: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).userAuth.count(args)
    },
    aggregateUserAuth: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).userAuth.aggregate(args)
    },
  },
  Mutation: {
    createOneUserAuth: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).userAuth.create(args)
    },
    updateOneUserAuth: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).userAuth.update(args)
    },
    deleteOneUserAuth: async (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).userAuth.delete(args)
    },
    upsertOneUserAuth: async (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).userAuth.upsert(args)
    },
    deleteManyUserAuth: async (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).userAuth.deleteMany(args)
    },
    updateManyUserAuth: (
      _parent,
      args,
      { injector }: GraphQLModules.Context,
    ) => {
      return injector.get(PrismaProvider).userAuth.updateMany(args)
    },
  },
}
