const multer = require('multer')
const express = require('express')
const app = express()
app.set('view engine', 'Pug')
app.get('/', (req, res) => {
  res.render(__dirname + '/mult2')
})

var store = multer.diskStorage({
  destination: 'lju',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var upload = multer({ storage: store })

app.post('/data', upload.array('mypic', 5), (req, res) => {
  const file = req.files

  console.log(file)
  if (file) {
    for (f of file) {
      res.write(
        `<h1>${f.originalname} has been uploaded in ${f.destination}</h1>`
      )
    }
  }
  res.send()
})

app.listen(7001)
