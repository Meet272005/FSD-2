var url = require('url')
var fs = require('fs')
var addr = 'http://localhost:8080/test/about.html?year=2025&month=march#staff'
var p = url.parse(addr, true)
console.log(p)
var year = p.query.year
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log('Leap Year')
} else {
  console.log('Not a leap year')
}

fs.writeFile('u.txt', JSON.stringify(p.query), err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Written')
  }
})

fs.readFile('u.txt', 'utf-8', (e, data) => {
  if (e) {
    throw e
  } else {
    console.log(JSON.parse(data).year)
    console.log(JSON.parse(data).month)
  }
})

const shape = [
  {
    name: 'circle',
    diameter: 8
  },
  {
    name: 'square',
    side: 10
  }
]

c = shape[0].diameter * 2 * 3.14
s = shape[1].side * 4

fs.writeFile(
  'Shape.txt',
  JSON.stringify(shape) +
    '\nPerimeter of Cirle: ' +
    c +
    '\nPerimeter of Square: ' +
    s,
  err => {
    if (err) {
      console.log(err)
    } else {
      console.log('Written')
    }
  }
)

const s2 = { d: { a: 10, b: 20, c: [30, 10] } }
fs.writeFile('s2.txt', JSON.stringify(s2), err => {
  if (err) {
    console.log(err)
  } else {
    console.log('Written')
  }
})

var add = 0
var sub = 0
var mul = 0
fs.readFile('s2.txt', 'utf-8', (e, data) => {
  if (e) {
    throw e
  } else {
    t = JSON.parse(data)
    console.log(t)
    add = t.d.a + t.d.b
    sub = Math.abs(t.d.c[1] - t.d.b)
    mul = t.d.c[0] * t.d.c[1]
    console.log('addition of a and b: ' + add)
    console.log('subtraction of 2nd element of c and b: ' + sub)
    console.log('multiplication of elements of c: ' + mul)

    fs.appendFile(
      's2.txt',
      '\naddition of a and b: ' +
        add +
        '\nsubtraction of 2nd element of c and b: ' +
        sub +
        '\nmultiplication of elements of c: ' +
        mul,
      e => {
        if (e) {
          console.log(e)
        } else {
          console.log('Append')
        }
      }
    )
  }
})

// fs.appendFile(
//   's2.txt',
//   '\naddition of a and b: ' +
//     add +
//     '\nsubtraction of 2nd element of c and b: ' +
//     sub +
//     '\nmultiplication of elements of c: ' +
//     mul,
//   e => {
//     if (e) {
//       console.log(e)
//     } else {
//       console.log('Append')
//     }
//   }
// )
