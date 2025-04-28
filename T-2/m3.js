const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname, { index: 'm3.html' }))
app.post('/login', (req, res, next) => {
  res.set('content-type', 'text/html')
  console.log(req.body)
  res.write(
    `<h1>Welcome ${req.body.un}</h1><h2>Email ID is:${req.body.eid}</h2>`
  )
  next()
})

app.post('/login', (req, res, next) => {
  if (req.body.nl == 'on') {
    res.write(`<h3>Thank you</h3> <a href='/'>Logout</a>`)
  } else {
    res.write(`<h3>You can subscribe</h3> <a href='/subscribe'>Subscribe</a>`)
  }
  res.send()
})

app.get('/subscibe', (req, res, next) => {
  res.send(`<h1>Thank you</h1><a href='/'>Logout</a>`)
})

app.listen(6001)
