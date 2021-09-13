

//const assert = require('assert'); 
//const isFromBellville = require('../isFromBellville');

let assert = require("assert");
let isFromBellville = require("../bootcamp-tests/isFromBellville");

//var isFromBellville = require('../isFromBellville');

describe("The isFromBellville function", function() {
    it("should show if a registration number is from Bellville", function() {

    assert.equal(true, isFromBellville("CY"));
   
}); 
});