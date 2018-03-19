let express = require("../util/express")();

let request = require("supertest")(express);

describe("StringRESTTest", () => {
    it("#GET /:string/reverse", (done) => {
        request.get("/strings/test/reverse")
            .expect("Content-Type", /json/)
            .expect(/tset/)
            .expect(200, done);
    });
});