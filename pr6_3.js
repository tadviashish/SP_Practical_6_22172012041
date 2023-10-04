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

    var a = url.parse(req.url, true)
    if (a.pathname == '/pr6_3.js') {
        var b = a.query.id;
        var c = a.query.name1;
        var d = a.query.brand;
        var e = a.query.quantity;
        var f = a.query.price;
        

        conn.connect(function (err) {
            if (err) {
                console.log(err.message)
            }
            else {
                console.log("Connected successfully")
            }

            var q = "insert into Product(id,name,brand,quantity,price) values ("+b+",'"+c+"','"+d+"',"+e+","+f+")";
            conn.query(q, function (err, result) {
                if (err) {
                    console.log(err.message)
                }
                else {
                    console.log("Data inserted successfully")
                }
            })
        })

        
        res.end()
    }
    else 
    {
        res.write(`<!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>PRACTICAL - 6</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
          </head>
          <body>
            <form action="pr6_3.js">
        <div >
        
            ID  : <input type="text" name="id" id=""><br>
            Name  : <input type="text" name="name1" id=""><br>
            Brand  : <input type="text" name="brand" id=""><br>
            Quantity  : <input type="text" name="quantity" id=""><br>
            Price  : <input type="text" name="price" id=""><br>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
              </form>
          </body>
        </html>`)
    }
    res.end()
}).listen(5055)
console.log("Application Running")