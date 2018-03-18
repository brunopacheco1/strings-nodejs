module.exports = () => {
    var express = require("express");

    var load = require("express-load");

    var app = express();

    load("api").then("repository").into(app);

    return app;
}