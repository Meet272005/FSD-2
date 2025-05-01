const express = require('express')
const sess = require('express-session')
const app = express()

app.use(sess({ secret: 'ABC' }))

app.use(express.static(__dirname, { index: 'S2.html' }))
app.get('/savesession', (req, res) => {
  req.session.uname = req.query.un
  req.session.pass = req.query.pw

  res.redirect('/fetchsession')
})

app.get('/fetchsession', (req, res) => {
  res.send(`<h1>Welcome ${req.session.uname} </h1>
                <a href="/deletesession"> LOGOUT </a>`)
})

app.get('/deletesession', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

app.listen(5005)
