var mysql = require('mysql');

module.exports = function (app) {
    app.get('/db', function (req, res, next) {
        var personList = [];
        console.log('Request Url: ' + req.url);
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "hola3.1416",
            database: "addresses"
        });
        var query = "SELECT people.idpeople, firstname, lastname, address FROM people INNER JOIN people_has_addresses ON people.idpeople = people_has_addresses.people_idpeople INNER JOIN addresses ON people_has_addresses.addresses_idaddresses = addresses.idaddresses ORDER BY people.idpeople ASC ";
        con.query(query, function (err, rows, fields) {
            if (err) {
                res.status(500).json({ "status_code": 500, "status_message": "internal server error" });
            } else {
                // Loop check on each row
                for (var i = 0; i < rows.length; i++) {

                    // Create an object to save current row's data
                    var person = {
                        'id': rows[i].idpeople,
                        'firstname': rows[i].firstname,
                        'lastname': rows[i].lastname,
                        'address': rows[i].address 
                    }
                    // Add object into array
                    personList.push(person);
                }

                // Render index.pug page using array 
                res.render('address', { "list": personList });
            }
        });




            
        con.end();
        
        
    });
}


