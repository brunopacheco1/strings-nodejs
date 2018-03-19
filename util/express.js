module.exports = () => {
    let express = require("express");

    let consign = require("consign");

    let app = express();

    consign({cwd: 'app'})
        .include("repositories")
        .include("services")
        .include("api")
        .into(app);

    return app;
}