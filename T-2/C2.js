const cp = require('cookie-parser')
const express = require('express')
const app = express()

app.use(cp())
app.use(express.static(__dirname, { index: 'C2.html' }))
app.get('/next', (req, res) => {
  res.cookie('fname', req.query.fn)
  res.cookie('lname', req.query.ln)
  res.cookie('password', req.query.pw)
  res.redirect('/admin')
})

app.get('/admin', (req, res) => {
  res.clearCookie('lname')
  res.send(` ${req.cookies.fname} ${req.cookies.lname}
            password is :${req.cookies.password}`)
})

app.listen(5007)
