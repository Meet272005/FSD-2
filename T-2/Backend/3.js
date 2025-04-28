const path = require('path')
const express = require('express')
const app = express()

var p = path.join(__dirname, '../')
console.log(p)

app.use(express.static(p, { index: '3.html' }))

app.listen(5002)
