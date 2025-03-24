var fs = require('fs')
fs.writeFile('a.txt', 'Hello !', err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Written')
  }
})
console.log('Completed')

fs.appendFile('a.txt', '\n HI !', e => {
  if (e) {
    console.log(e)
  } else {
    console.log('Append')
  }
})

fs.readFile('a.txt', 'utf-8', (e, data) => {
  if (e) {
    throw e
  } else {
    console.log(data)
  }
})

fs.rename('a.txt', 'x1.txt', () => {
  console.log('renamed')
})

fs.unlink('a1.txt', err => {
  if (err) {
    console.log(err)
  } else {
    console('deleted')
  }
})
