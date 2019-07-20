const express = require('express')

const authRoutes = require('./routes/auth')

const app = express()

app.use(express.json())

app.use(authRoutes)

const PORT = process.env.PORT || 5006

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
