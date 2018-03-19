module.exports = (app) => {
    let errorHandler = (error, response) => {
        console.log(error);

        response.json({
            error : error.message
        });
    };
    
    app.get("/strings/:id", (request, response) => {
        let service = app.services.StringService(app);
        
        service.get(request.params.id).then((stringResult) => {
            response.json({
                response : stringResult
            });
        }).catch((error) => errorHandler(error, response));
    });
    
    app.get("/strings/:string/reverse", (request, response) => {
        let service = app.services.StringService(app);
        
        service.reverse(request.params.string).then((stringReversed) => {
            response.json({
                response : stringReversed
            });
        }).catch((error) => errorHandler(error, response));
    });

    app.post("/strings/:string", (request, response) => {
        let service = app.services.StringService(app);

        service.save(request.params.string).then(() => {
            response.json({
                response : "String saved!"
            });
        }).catch((error) => errorHandler(error, response));
    });
}