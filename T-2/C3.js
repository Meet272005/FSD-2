const cp = require('cookie-parser')
const express = require('express')
const app = express()

app.use(cp())
app.use(express.static(__dirname, { index: 'C3.html' }))
app.get('/next', (req, res) => {
  feedback = [req.query.name, req.query.eid, req.query.msg, req.query.Rating]
  res.cookie('feedback', feedback, { maxAge: 10000 })
  res.send(
    `<h3>successfully submited </h3> <br> <a href='/result'>Click here</a>`
  )
})

app.get('/result', (req, res) => {
  if (req.cookies.feedback) {
    res.send(`${req.cookies.feedback}<br> <a href='/'>Log out</a>`)
  } else {
    res.send(`<h2>No feedback available </h2><a href='/next'>Log out</a>`)
  }
})

app.listen(5009)
