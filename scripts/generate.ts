console.debug('[gql] generating...')

/**
 * https://graphql.org/graphql-js/utilities/
 */
import { printSchema } from 'graphql'
import { DocumentNode, GraphQLSchema } from 'graphql'
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { appModules } from '../src/graphql-modules'

const fileOutput = resolve(__dirname, '../dist/schema.graphql')

/**
 * can do a diff on it here
 */
// const existing = readFileSync(fileOutput, printSchema(schema)).toString()

const formattedSchema = printSchema(appModules.schema)
writeFileSync(fileOutput, formattedSchema)
