module.exports = (app) => {
    let errorHandler = (error, response) => {
        console.log(error);

        response.status(500).json({
            error : error.message
        });
    };

    let service = app.services.StringService(app);
    
    app.get("/strings/:id", (request, response) => {
        service.get(request.params.id).then((stringResult) => {
            response.json({
                response : stringResult
            });
        }).catch((error) => errorHandler(error, response));
    });
    
    app.get("/strings/:string/reverse", (request, response) => {
        service.reverse(request.params.string).then((stringReversed) => {
            response.json({
                response : stringReversed
            });
        }).catch((error) => errorHandler(error, response));
    });

    app.post("/strings", (request, response) => {
        request.assert("string", "String is a mandatory field.").notEmpty();

        let errors = request.validationErros();

        if(errors) {
            response.status(400).json({
                errors : errors
            });

            return;
        }

        service.save(request.body).then(() => {
            response.json({
                response : "String saved!"
            });
        }).catch((error) => errorHandler(error, response));
    });
}