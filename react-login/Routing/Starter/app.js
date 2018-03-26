var http = require('http');
var fs = require('fs');

http.createServer(function (req, res, err) {

    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    else if (req.url === '/api') {
         res.writeHead(200, { 'Content-Type': 'application/json' });
         var obj = {
             firstname: 'John',
             lastname: 'Doe'
         };
         res.end(JSON.stringify(obj));
    }
    else {
         res.writeHead(404);
         res.end("ntt");
    }    

}).listen(8080, 'localhost');
