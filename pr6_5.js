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

        var q = "select * from product where name = 'soap' AND brand ='dettol'"
        conn.query(q,function (err, result) 
        {
            if (err)
            {
                console.log(err.message)
            }
            else 
            {
                console.log(result)
            }
        })
    
    })
   
    res.end()
}).listen(5000)
console.log("Application Running")