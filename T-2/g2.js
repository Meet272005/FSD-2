const express = require('express')
const app = express()

app.use(express.static(__dirname, { index: 'g2.html' }))
app.get('/test', (req, res) => {
  console.log(req.query)
  // res.set('content-type', 'text/html')
  var data = req.query.data
  // data = data.split('.')
  data = data.replaceAll('.', '<br>')
  // res.write('<pre>')
  // for (i of data) {
  //   res.write(i + '<br>')
  // }
  // res.write('</pre>')
  res.send(data)
})
app.listen(5006)
