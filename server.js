var http = require('http');

http.createServer(function(request, response) {
    // send the http header
    // http status: 200 : Ok
    // content type

    response.writeHead(200, {'Content-Type': 'text/plain'});

    // send the response body 
    response.end('Hello world\n');

}).listen(8081);

console.log('server is running on http://127.0.0.1:8081/');
