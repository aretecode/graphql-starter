import { mergeTypeDefs } from 'graphql-toolkit'
import { GraphQLModule } from '@graphql-modules/core'
import Schema from './schema'
import resolver from './resolver'
import { ExampleAPI } from './requests'

/**
 * @see https://medium.com/the-guild/graphql-modules-feature-based-graphql-modules-at-scale-2d7b2b0da6da
 * @see https://graphql-modules.com/docs/recipes/data-sources
 */
export const exampleModule = new GraphQLModule<{}, {}, {}>({
  name: 'Example',
  typeDefs: mergeTypeDefs([Schema]),
  resolvers: resolver,
  providers: [ExampleAPI],
})
