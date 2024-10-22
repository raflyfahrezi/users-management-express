import 'dotenv/config'

const databasePort = process.env.DATABASE_PORT
const databaseHost = process.env.DATABASE_HOST
const databaseUser = process.env.DATABASE_USER
const databaseName = process.env.DATABASE_NAME
const databasePassword = process.env.DATABASE_PASSWORD

export const postgresDatabaseURL = `postgres://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`
