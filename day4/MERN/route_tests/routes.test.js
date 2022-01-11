const {expect} = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const {Audi} = require("../persistence/models/audi.js");
const server = require("../index.js");

chai.use(chaiHttp);

describe("opening tests", function() {
    
    beforeEach(function() {
        console.log("-".repeat(80));
    })

    afterEach(function() {
        console.log("-".repeat(80));
        console.log("\n".repeat(2));
    })


    before(function(done) {
        console.log("setup test space");

        
        let testID;
        
        const testAudi = new Audi({
            audiName: "test name",
            colour: "pink",
            engine: 1.2,
            UID: 5
        });
        testAudi.save().then((result) => {
            testID = result._id.toString();
            done();
        });
    });

    

    it("should respond with status 201 and contain data", function(done) {
        chai.request(server)

        .get("/audi/getAll")


        .end((err, res) => {

            if(err) {
                console.log("error");
                done(err);
            };

            const resBody = res.body;
            expect(res).to.have.status(201);
            expect(resBody).to.not.be.null;
            
            resBody.map((audi) => {
                expect(audi).to.be.a("object");
                expect(audi).to.contain.keys("audiName");
            });
            
            done();
        
        });
    });
    
    it("should respond with status 200 and contain data from a get by ID", function(done) {
        chai.request(server)

        .get("/audi/get/61dc222a5679cc9d23e056df")

        .end((err, res) => {

            if(err) {
                console.log("error");
                done(err);
            };

            const resBody = res.body;
            expect(res).to.have.status(200)
            expect(resBody).to.not.be.null;
            console.log(resBody);
            done();
        });
    });
        

    it("should respond with status 201 and contain data", function(done) {
        chai.request(server)

        .post("/audi/post")

        .send(testAudi)

        .end((err, res) => {
            if(err) {
                console.log("error");
                done(err);
            };

            expect(res).to.have.status(201);
            expect(res).to.not.be.null;
            expect(res).to.have.property("text",`${testAudi.audiName} added to the database.`);
            done();
        });
    });


    before(function() {
        chai.request(server)

        .post(testAudi)

    })

    it("should delete an audi object with a given ID and give status code 202", function() {
        chai.request(server)
        


        .delete(`/audi/delete/${audiDeleteID}`)

        .end((err, res) => {
            if(err) {
                console.log("error");
                done(err);
            };

            expect(res).to.have.status(202);
            expect(res).to.contain("text", "audi deleted");
        })
    })

});