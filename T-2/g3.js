const express = require('express')
const app = express()

app.use(express.static(__dirname, { index: 'g3.html' }))
app.get('/ans', (req, res) => {
  console.log(req.query)
  res.set('content-type', 'text/html')
  var a = req.query.a
  var b = req.query.b
  var formula = req.query.formula

  if (parseInt(a) < 0 || parseInt(b) < 0) {
    res.send('Enter positive number')
  }

  if (formula == 'add') {
    res.send(`${a}+${b}=${parseInt(a) + parseInt(b)}`)
  } else if (formula == 'sub') {
    res.send(`${a}-${b}=${parseInt(a) - parseInt(b)}`)
  } else if (formula == 'mul') {
    res.send(`${a}*${b}=${parseInt(a) * parseInt(b)}`)
  } else if (formula == 'div') {
    res.send(`${a}/${b}=${parseInt(a) / parseInt(b)}`)
  } else {
    res.send('Select any one formula')
  }
})
app.listen(5005)
