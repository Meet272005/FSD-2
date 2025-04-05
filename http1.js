var url = require('url')
var http = require('http')
var server = http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    // res.write("<h1 style='color:red';> Welcome </h1>")
    // res.write('Testing')
    res.write('URL path fetched')
    data = url.parse(req.url, true)
    res.write('<br>Multiplication of a & b: ')
    res.write(data.query.a * data.query.b + '')
    res.end('<br>' + JSON.stringify(data.query))
    //   res.write('ended') NOT VALID
  })
  .listen(5002)
// server.listen(5001, () => console.log('Server Started'))
