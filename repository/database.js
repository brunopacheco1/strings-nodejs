module.exports = () => {
    return () => { //wrapping the function
        var mysql = require("mysql");
    
        var connection = mysql.createConnection({
            host : "localhost",
            user : "root",
            password : "password",
            database : "strings"
        });
    
        return connection;
    };
}