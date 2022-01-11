describe("My first group of tests", function() {

    let a;
    let b;

    it("should print the word hello", function() {
        console.log("Hello World");
    });

    before(function() {
        a = 10;
        b = 5;
    });
    it("should return 50 where a is 10 and b is 5", function() {
        console.log(a*b);
    });

    beforeEach(function() {
        console.log("-".repeat(70));
        console.log("Print this before each test");
    })

    afterEach(function() {
        console.log("Print this after each test");
        console.log("-".repeat(70));
    });
});
