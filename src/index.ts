import dotenv from 'dotenv'
import express, { Request, Response } from 'express'

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.json({
    id: 0,
    data: null,
    message: 'Welcome to the server',
  })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
