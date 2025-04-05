var url = require('url')
var a = 'http://localhost:5001/test/hello.html?user=test&age=20#test'
test = url.parse(a, true)
console.log(test)
console.log(JSON.parse('{"a":50}'))
// console.log(JSON.parse("{'a':50}")) SYNTAX ERROR
