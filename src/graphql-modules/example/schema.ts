import { gql } from 'apollo-server'

export default gql`
  scalar AnyType

  # === model ===
  type ExampleType {
    value: AnyType
  }

  # === response ===

  type GenericResponse {
    responseMessage: String
  }

  # === input ===

  input ExampleInputType {
    value: AnyType
  }

  type Query {
    getExample(id: ID): ExampleType
  }
  type Mutation {
    setExample(value: AnyType): GenericResponse
  }
`
