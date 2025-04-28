const express = require('express')
const app = express()

app.use(
  '/test1',
  (req, res, next) => {
    res.write('<p> First </p>')
    next()
  },
  (req, res, next) => {
    res.write('<p> Second </p>')
    next()
  },
  (req, res, next) => {
    res.write('<p> Third </p>')
    res.send()
  }
)
app.listen(5006)
