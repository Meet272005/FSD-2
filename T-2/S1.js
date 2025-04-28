const sess = require('express-session')
const express = require('express')
const app = express()

app.use(sess({ resave: false, saveUninitialized: false, secret: 'LJU123' }))

app.get('/', (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++
    res.send(
      `<h1 style='color:blue'>You gave visited ${req.session.page_views} times</h1>`
    )
  } else {
    req.session.page_views = 1
    res.send(`<h1 style='color:green'>Thank you for visiting</h1>`)
  }
})
app.listen(5000)
