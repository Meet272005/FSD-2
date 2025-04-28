const cp = require('cookie-parser')
const express = require('express')
const app = express()

app.use(cp())
app.use('/cp', (req, res) => {
  res.cookie('name', 'Express JS')
  res.cookie('Id', '2', { maxAge: 7000 })
  res.cookie('email', 'a@gmail.com', { expires: new Date(Date.now() + 15000) })
  res.cookie('brach', 'CSE')
  res.cookie('topic', 'cookie')
  res.clearCookie('topic')
  res.send(req.cookies)
})

app.listen(7005)
