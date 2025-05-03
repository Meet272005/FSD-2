const multer = require('multer')
const express = require('express')
const app = express()
app.set('view engine', 'Pug')
app.get('/', (req, res) => {
  res.render(__dirname + '/mult1')
})

var store = multer.diskStorage({
  destination: 'lju',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var upload = multer({ storage: store })

app.post('/data', upload.single('mypic'), (req, res) => {
  const file = req.file

  console.log(file)
  if (file) {
    res.send(
      `<h1>${file.originalname} has been uploaded in ${file.destination}</h1>`
    )
  }
})

app.listen(7001)
