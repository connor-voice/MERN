const {expect} = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const {Audi} = require("../persistence/models/audi.js");
const server = require("../index.js");

chai.use(chaiHttp);

describe("opening tests", function() {

    it("should respond with", function(done) {
        chai.request(server)


        .get("/audi/getAll")


        .end((err, res) => {

            if(err) {
                console.log("error");
                done(err);
            };

            expect(res).to.have.status(201);
            expect(res).to.not.be.null;
            done();
        });
    });
});