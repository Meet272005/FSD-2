const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname, { index: 'ljform.html' }))
app.post('/login', (req, res) => {
  console.log(req.body.un)
  if (req.body.un == 'admin') {
    res.send(`<h1 style='color:blue;'> Welcome ${req.body.un}</h1>`)
  } else {
    res.send(`<h1 style='color:red;'>Please login with admin name</h1>`)
  }
})

app.listen(5007)
