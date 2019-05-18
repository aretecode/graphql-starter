import { GraphQLModule } from '@graphql-modules/core'
import { exampleModule } from './example'

export const appModules = new GraphQLModule({
  name: 'App',
  imports: [exampleModule],
})
