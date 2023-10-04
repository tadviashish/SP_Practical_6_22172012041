var mysql = require('mysql')
var conn = mysql.createConnection({
    server: "localhost",
    user: "root",
    password: "",
    database: "node_test"
})

conn.connect(function (err) {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log("Connected successfully")
    }

    //var q = "create database Node_test"

    //var q = "create table Product(id int(10),name varchar(30),brand varchar(30), quantity int(15),price int(10))"

    //var q = "insert into Product(id,name,brand,quantity,price) values ?"

    //var q = "select * from Product"

    // var data = [
    //     [1, 'Soap', 'Dettol', 3, 20],
    //     [2, 'Shampoo', 'Loreal', 5, 100],
    //     [3, 'Toothpaste', 'Colgate', 2, 50],
    //     [4, 'Sanitizer', 'LifeBuoy', 2, 60]
    // ]

    // conn.query(q,[data] ,function (err, result) 
    // {
    //     if (err)
    //     {
    //         console.log(err.message)
    //     }
    //     else 
    //     {
    //         console.log("Data inserted successfully")
    //     }
    // })

})

module.exports = conn