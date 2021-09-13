
 
//const assert = require('assert'); 
//const greet = require('../greet');
//var greet = require('../greet');

let assert = require("assert");
let greet = require("../bootcamp-tests/greet");

describe('The greet function' , function() {
    it('should return "Hello, Lucky" when I greet Lucky', function() {
        assert.equal("Hello, Lucky" , greet('Lucky'));

    
    });
    
});

