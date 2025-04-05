var eventemitter = require('events')
var ee = new eventemitter()

ee.on('start', () => {
  console.log('Event Started')
})

ee.addListener('end', (a, b) => {
  console.log('Multiplication is: ' + a * b)
})

ee.emit('start')
ee.emit('end', 7, 6)
console.log('Completed')
