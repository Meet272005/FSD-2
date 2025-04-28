const express = require('express')
const app = express()

app.get('/branch/:b/name/:n', (req, res) => {
  res.send(req.params)
})

app.listen(7001)
