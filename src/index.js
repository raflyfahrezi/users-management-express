const dotenv = require('dotenv')
const express = require('express')

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.json({
    id: 0,
    data: null,
    message: 'Welcome to the server',
  })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
