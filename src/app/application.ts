import { UserAuthModule } from './UserAuth/UserAuth.module'
import { UserModule } from './User/User.module'
import { FavoriteModule } from './Favorite/Favorite.module'
import { createApplication } from 'graphql-modules'
import { InputsModule } from './inputs/inputs.module'
import { CommonModule } from './common/common.module'
import { addSelect } from './addSelect'
import { PrismaProvider } from './Prisma.provider'

export const application = createApplication({
  modules: [
    InputsModule,
    CommonModule,
    FavoriteModule,
    UserModule,
    UserAuthModule,
  ],
  providers: [PrismaProvider],
  middlewares: {
    '*': { '*': [addSelect] },
  },
})
