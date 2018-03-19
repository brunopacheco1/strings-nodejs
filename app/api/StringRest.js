module.exports = (app) => {
    let errorFunction = (errorResult) => {
        response.json({
            error : errorResult
        });
    };
    
    app.get("/strings/:id", (request, response) => {
        let service = app.services.StringService(app);
        
        service.get(request.params.id).then((stringResult) => {
            response.json({
                response : stringResult
            });
        }).catch(errorFunction);
    });
    
    app.get("/strings/:string/reverse", (request, response) => {
        let service = app.services.StringService(app);
        
        service.reverse(request.params.string).then((stringReversed) => {
            response.json({
                response : stringReversed
            });
        }).catch(errorFunction);
    });

    app.post("/strings/:string", (request, response) => {
        let service = app.services.StringService(app);

        service.save(request.params.string).then(() => {
            response.json({
                response : "String saved!"
            });
        }).catch(errorFunction);
    });
}