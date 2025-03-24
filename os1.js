var os = require('os')
var fs = require('fs')

console.log(os.platform())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.arch())

var fm = os.freemem()
console.log(fm)
var d = fm / 1024 / 1024 / 1024
console.log(d)

// fs.mkdirSync(os.tmpdir() + '/AA')
if (d > 1) {
  fs.writeFileSync(os.tmpdir() + '/AA/temp.txt', 'Sufficient Memory')
} else {
  fs.writeFileSync(os.tmpdir() + '/AA/temp.txt', 'Insufficient Memory')
}
