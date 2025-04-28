const path = require('path')
const express = require('express')
const app = express()

var hp = path.join(__dirname, '../html')
var cp = path.join(__dirname, '../CSS')
var ip1 = path.join(__dirname, '../img')

app.use(express.static(ip1))
app.use(express.static(cp))
app.use(express.static(hp, { index: 't2.html' }))

app.listen(7002)
