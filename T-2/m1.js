const express = require('express')
const app = express()

const fun1 = (req, res, next) => {
  //   res.set('content-type', 'text/html')
  console.log('Function 1')
  res.write('<h1>Function 1 executed</h1>')
  next()
}

const fun2 = (req, res, next) => {
  res.write('<h3> Function 2 Executed</h3>')
  next()
}

app.use('/test', fun1, fun2)

app.get('/test', (req, res) => {
  res.write('Final Execution')
  res.send()
})

app.listen(7001)
