const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')

const app = express()

app.use(express.json())

app.use(authRoutes)

// app.get('*', (req, res) => {
//   console.log(path.join(__dirname, 'client', 'index.html'))
//   res.sendFile(path.join(__dirname, 'client', 'index.html'))
// })

const PORT = process.env.PORT || 5006

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
