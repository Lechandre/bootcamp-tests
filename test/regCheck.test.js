

//const assert = require('assert'); 
//const regCheck = require('../regCheck');

let assert = require("assert");
let regCheck = require("../bootcamp-tests/regCheck");


//var regCheck = require('../regCheck');

describe("The regCheck function", function() {


    it("should check if a registration number is for GP, L, EC, MP registration plates",  function() {
    
    
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    
    
    }); 
    
    
    
    
    }); 