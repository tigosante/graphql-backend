import { createModule } from 'graphql-modules'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

export const FavoriteModule = createModule({
  id: 'Favorite',
  typeDefs,
  resolvers,
})
