var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    console.log('received request...');
    fs.readFile('web.html', function(error, content) {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        response.end(content, 'utf-8');
    });
}).listen(80);
console.log('server running (port 8125)...');
