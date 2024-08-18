var http = require('http');

var server = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello Word");
    response.end();
}).listen(8888);

console.log("Serve as started");