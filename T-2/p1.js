const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname, { index: 'p1.html' }))
app.post('/data', (req, res) => {
  console.log(req.body)
  //   res.write(JSON.stringify(req.body))
  res.send(`<h1> Welcome ${req.body.un}</h1>`)
})

app.listen(5006)
