const {expect} = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Initial Tests", function() {
    it("should do some math or something idk", function() {
        let a = 5;
        let b = 4;
        let sum;

        // Act
        sum = a * b;

        //Assert
        expect(sum).to.equal(20);
    });

    it("should print a string saying 'Hello <name>'", function() {

        // Arrange 
        let string;
        let name;

        //Act 
        name = "Connor";
        string = `Hello ${name}`;

        //Assert
        expect(string).to.eql("Hello Connor");
    });

    it("should return the value of 1 + 2 + 3 + 4", function() {

        let a;
        let b;
        let c;
        let d;
        let sum;

        a = 1;
        b = 2;
        c = 3;
        d = 4;
        sum = a+b+c+d;

        expect(sum).to.eql(10);
    });

    it("string should be hello", function() {
        let string;

        string = "hello";

        expect(string).to.eql("hello");
    });

    it("should expect number 12 not be undefined", function() {
        let a;

        a = 12;

        expect(12).not.undefined;
    });

    it("object should have a property of name", function() {
        const object = {name: ""};

        object.name = "connor";

        expect(object.name).to.exist;
        
    });

    it("a text should be null", function() {
        let string;

        string = null;

        expect(string).to.be.null;
    });

    it("should expect 5 to be odd", function() {
        let a;
        let bool;

        a = 5;
        if(a %=2){
            bool = false;
        }

        expect(bool).to.be.false;
    });

    it("string Hello Reece should contain Reece", function() {
        let string;

        string = "Hello Reece";

        expect(string).to.contain("Reece");
    });

    it("an array of fruits should contain an apple", function() {
        let banana = {};
        let apple = {};
        let fruits = [];

        fruits.push(banana, apple);

        expect(fruits).to.contain(apple);
    });
});