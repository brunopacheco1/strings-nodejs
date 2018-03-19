class EntityManager {
    constructor(app) {
        console.log("EntityManager constructor.");

        var mysql = require("mysql");
    
        this._connection = mysql.createConnection({
            host : "localhost",
            user : "root",
            password : "password",
            database : "strings"
        });
    }

    getConnection() {
        console.log("Returning connection...");

        return this._connection;
    }
}

module.exports = (app) => (app) => new EntityManager(app);