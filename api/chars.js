module.exports = (app) => {
    app.get("/chars", (request, response) => {
        response.send("Chars.");
    });
}