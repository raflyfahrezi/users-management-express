import 'dotenv/config'

import express from 'express'
import bodyParser from 'body-parser'

import { router } from '@/routes'

const app = express()
const port = process.env.PORT

// Parser
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Router
app.use(router)

// Listen on
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
