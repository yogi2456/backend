const fs = require("fs")

fs.writeFile("/hello.txt", "Welcome", (error) => {
    if(error) {
    console.log(error)
    } else { 
    console.log("succesfully file written")
    }
});

fs.readFile("/hello.txt", "utf8", function (err, data) {
    if(err) throw err;
    console.log(data);
});