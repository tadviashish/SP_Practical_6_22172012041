var http = require('http')
var mysql = require('mysql')
var url = require('url')
var conn = mysql.createConnection({
    server: "localhost",
    user: "root",
    password: "",
    database: "node_test"
})

http.createServer(function (req, res) {
    conn.connect(function (err) {
        if (err) {
            console.log(err.message)
        }
        else {
            console.log("Connected successfully")
        }

        var q = "delete from product where id = 1"
        conn.query(q,function (err, result) 
        {
            if (err)
            {
                console.log(err.message)
            }
            else 
            {
                console.log("Product Deleted successfully")
            }
        })
    
    })
   
    res.end()
}).listen(5000)
console.log("Application Running")