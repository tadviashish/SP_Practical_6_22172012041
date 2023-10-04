const http = require('http');
const mysql = require('./pr6_1.js');

//create a server object:
const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    mysql.query("SELECT * FROM Product", function (err, result, fields) {
        if (err) throw err;
        res.write(result);
    });

    res.end();
});

server.listen(5050)