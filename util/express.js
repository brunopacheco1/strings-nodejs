module.exports = () => {
    var express = require("express");

    var load = require("express-load");

    var app = express();

    load("repositories", {cwd: 'app'})
        .then("services")
        .then("api")
        .into(app);

    return app;
}