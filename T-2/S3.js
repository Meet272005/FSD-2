const express = require('express')
const sess = require('express-session')
const app = express()

app.use(sess({ secret: 'XYZ', cookie: { maxAge: 8000 } }))

app.use(express.static(__dirname, { index: 'S3.html' }))
app.get('/save', (req, res) => {
  req.session.uname = req.query.un
  req.session.pass = req.query.pw

  res.redirect('/fetchdata')
})

app.get('/fetchdata', (req, res) => {
  if ((req.session.uname == 'admin') & (req.session.pass == 'admin@123')) {
    res.send(`<h1>Welcome ${req.session.uname} </h1>
                  <a href="/deletesession"> LOGOUT </a>`)
  } else {
    res.send(`<h1>Please enter valid username and password</h1>
                  <a href="/"> LOGIN </a>`)
  }
})

app.get('/deletesession', (req, res) => {
  req.session.destroy()
  res.send(`<h1>Session Destroyed !</h1>
                  <a href="/"> LOGIN </a>`)
})

app.listen(5007)
