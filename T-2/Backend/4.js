const path = require('path')
const express = require('express')
const app = express()

var p = path.join(__dirname, '../Frontend')
console.log(p)

app.use(express.static(p, { index: '4.html' }))

app.listen(5003)
