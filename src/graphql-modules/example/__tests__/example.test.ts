import 'reflect-metadata'
import gql from 'graphql-tag'
import { execute } from 'graphql'
import { exampleModule, ExampleAPI } from '../'
import { ExampleType } from '../typings'

/**
 * @note we are not currently using providers since there is no api to call
 */
describe('ExampleModule', () => {
  it('can read the default example', async () => {
    const { schema } = exampleModule

    const result = await execute<{ example: ExampleType }>({
      schema,
      document: gql`
        query {
          example {
            value
          }
        }
      `,
    })

    expect(result.errors).toBeFalsy()
    expect(result.data).toMatchSnapshot()
  })

  it.skip('can write + read a resume (this will require at least a keyed thing, or multi-tenant)', () => {
    //
  })
})
