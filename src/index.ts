import 'dotenv/config'

import express from 'express'
import bodyParser from 'body-parser'

import { router } from '@/routes'

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(router)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
