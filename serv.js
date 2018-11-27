var http = require('http');
var fs = require('fs');

let port = process.env.PORT || 80;


http.createServer(function (request, response) {
    console.log('received request...');
    fs.readFile('web.html', function(error, content) {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        response.end(content, 'utf-8');
    });
}).listen(port);
console.log('server running (port ' + port + ')...');
