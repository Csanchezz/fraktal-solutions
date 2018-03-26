var fs = require('fs');

console.log("-----Here is an asynchronous execution----- \n");
var greet = fs.readFileSync(__dirname + "/greet.txt", 'utf8');
console.log(greet);


var greet2 = fs.readFile(__dirname + "/greet.txt",
    function (err, data) {
        console.log("\n -----Here is a synchronous execution encoded in Bytes----- \n");
        console.log(data);
    }
);


var greet2 = fs.readFile(__dirname + "/greet.txt", 'utf8',
    function (err, data) {
        console.log("\n -----Here is a synchronous execution encoded in utf8----- \n");
        console.log(data);
    }
);



var greet2err = fs.readFile(__dirname + "/gret.txt",
    function (err, data) {
        console.log("\n -----Here is a synchronous' error execution----- \n");
        if (err) {
            console.log(err);
        } 
        
    }
);

