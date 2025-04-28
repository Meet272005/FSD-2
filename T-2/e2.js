const express = require('express')
const app = express()
var s = { name: 'ABC', age: 28 }

app.get('/', (req, res) => {
  res.write(JSON.stringify(s.age))
  res.write(s.name)
  res.send()
})

app.get('/j', (req, res) => {
  res.sendStatus(200)
})

app.get('/j1', (req, res) => {
  res.json(s.age)
})
app.listen(5002)
