module.exports = (app) => {
    app.get("/strings", (request, response) => {
        response.send("String.");
    });
    
    app.get("/strings/reverse", (request, response) => {
        response.send("String.".split("").reverse().join(""));
    });

    app.get("/strings/query", (request, response) => {
        var connection = app.repository.database();

        connection.query("SELECT * FROM STRINGS", (err, result) => {
            response.send(result);
        });

        connection.end();
    });
}