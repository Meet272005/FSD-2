var url = require('url')
var http = require('http')
http
  .createServer((req, res) => {
    if (req.url == '/') {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.end(
        "<ul><li><a href='/about'> About</a></li> <li><a href='/contact'> Contact</a></li><ul>"
      )
    } else if (req.url == '/about') {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.end("<h1 style='text-align:center;color:blue'>About Page</h1>")
    } else if (req.url == '/contact') {
      res.writeHead(200, { 'content-type': 'text/html' })
      var cd = { MN: 9997778880, eid: 'lj@gmail.com' }
      //   res.end(JSON.stringify(cd))
      res.end('Mobile numer ' + cd.MN)
    } else {
      res.writeHead(404, { 'content-type': 'text/plain' })
      res.end('Page not found')
    }
  })
  .listen(8001)
