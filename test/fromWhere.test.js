

//const assert = require('assert'); 
//const fromWhere = require('../fromWhere');

let assert = require("assert");
let fromWhere = require("../bootcamp-tests/fromWhere");

//var fromWhere = require('../fromWhere');

describe("The fromWhere function", function() {
    it("should return the town a specific car is from", function() {

assert.equal(fromWhere('CY'), 'Bellville');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CA'), 'Cape Town');
assert.equal(fromWhere('CC'), 'Some other place!');

    });
});