
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi there Welcome to Backend')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})