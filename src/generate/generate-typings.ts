import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/generate/graphql.ts'),
  outputAs: 'class',
});
