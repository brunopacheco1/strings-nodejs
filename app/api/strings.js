module.exports = (app) => {
    app.get("/strings/:id", (request, response) => {
        let result = app.services.StringService(app).get(request.params.id);

        response.json({
            response : result
        });
    });
    
    app.get("/strings/:string/reverse", (request, response) => {
        let result = app.services.StringService(app).reverse(request.params.string);

        response.json({
            response : result
        });
    });

    app.post("/strings/:string", (request, response) => {
        let result = app.services.StringService(app).save(request.params.string);

        response.json({
            response : result
        });
    });
}