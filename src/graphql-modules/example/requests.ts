/**
 * @see https://www.apollographql.com/docs/apollo-server/features/data-sources
 * @see https://graphql-modules.com/docs/guides/data-sources
 */
import { RESTDataSource } from 'apollo-datasource-rest'
import { Injectable } from '@graphql-modules/di'

@Injectable()
export class ExampleAPI extends RESTDataSource {
  baseURL = 'http://localhost:5555/example'

  async create(id: string) {
    return this.get(`/${id}`)
  }

  async delete(id: string) {
    return this.delete(`/${id}`)
  }

  async get(id: string) {
    return this.get(`/${id}`)
  }

  async getList() {
    return this.get('/')
  }
}
