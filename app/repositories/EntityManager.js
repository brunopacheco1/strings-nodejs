class EntityManager {
    constructor(app) {
        let mysql = require("mysql");
    
        this._connection = mysql.createConnection({
            host : "localhost",
            user : "root",
            password : "password",
            database : "strings"
        });
    }

    getConnection() {
        return new Promise((resolve, reject) => {
            resolve(this._connection);
        });
    }
}

module.exports = (app) => (app) => new EntityManager(app);