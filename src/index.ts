import 'dotenv/config'

import express from 'express'
import bodyParser from 'body-parser'

import { router } from '@/routes'
import { errorHandler } from '@/utils'

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

// Global Error Handler
app.use(errorHandler)

// Listen on
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
