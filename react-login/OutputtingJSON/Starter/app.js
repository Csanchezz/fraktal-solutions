var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    var obj = {
        name: "some",
        lastname: "Dieseldorlf"
    }

    res.end(JSON.stringify(obj));
}).listen(2230, 'localhost');


