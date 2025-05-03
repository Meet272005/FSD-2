const express = require('express')
const app = express()

app.use(express.urlencoded())
app.set('view engine', 'pug')
app.set('views', __dirname)

app.get('/', (req, res) => {
  res.render('form')
})

app.post('/data', (req, res) => {
  res.render('output', {
    uname: req.body.un,
    email: req.body.email,
    branch: req.body.branch
  })
})
app.listen(7001)
