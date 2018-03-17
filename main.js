var main = require("./util/express")();
require("./api/routes")(main);

main.listen(3000, function() {
    console.log("Rodando.");
})