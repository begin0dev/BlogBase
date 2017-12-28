const http = require('http')
const nodeStatic = require('node-static')

// 2. Static files server
const staticDirectory = new nodeStatic.Server(__dirname)

// 3. Usual http stuff
const server = http.createServer()
server.addListener('request', function(req, res) {
  staticDirectory.serve(req, res)
})
server.addListener('upgrade', function(req, res) {
  res.end()
})

console.log(' [*] Listening on 0.0.0.0:9999')
server.listen(9999, '0.0.0.0')
