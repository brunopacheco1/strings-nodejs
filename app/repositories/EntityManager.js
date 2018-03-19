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
        return new Promise((resolve, reject) => {
            console.log("Returning connection...");

            resolve(this._connection);
        });
    }
}

module.exports = (app) => (app) => new EntityManager(app);