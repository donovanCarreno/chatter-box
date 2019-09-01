const express = require('express')
const path = require('path')
const cors = require('cors')

const authRoutes = require('./routes/auth')

const app = express()

if (process.env.NODE_ENV === 'development') {
  const corsConfig = {
    origin: 'http://localhost:8080'
  }

  app.use(cors(corsConfig))
}

app.use(express.json())

app.use(authRoutes)

const PORT = process.env.PORT || 5006

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
