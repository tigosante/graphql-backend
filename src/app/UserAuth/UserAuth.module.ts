import { createModule } from 'graphql-modules'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

export const UserAuthModule = createModule({
  id: 'UserAuth',
  typeDefs,
  resolvers,
})
