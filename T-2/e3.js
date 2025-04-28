const express = require('express')
const app = express()

var s = {
  d: [
    { name: 'A', age: 20 },
    { name: 'C', age: 18 },
    { name: 'Z', age: 30 }
  ]
}

app.get('/', (req, res) => {
  res.write('<table border=2> <tr><th>Name</th> <th>Age</th></tr>')
  for (i of s.d) {
    res.write(`<tr><td>${i.name}</td> <td>${i.age}</td></tr>`)
  }
  res.write('<table>')
  var sd = s.d.sort((a, b) => b.age - a.age)

  res.write(JSON.stringify(sd))
  res.send()
})
app.listen(5003)
