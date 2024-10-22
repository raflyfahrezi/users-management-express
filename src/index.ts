import 'dotenv/config'
import express from 'express'

import { router } from '@/routes'

const app = express()
const port = process.env.PORT

app.use(router)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
