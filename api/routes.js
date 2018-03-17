module.exports = function(express) {
    express.get("/strings", function(request, response) {
        response.send("Rodando 2.");
    });
    
    express.get("/strings/reverse", function(request, response) {
        response.send("Rodando.".split("").reverse().join(""));
    });
}