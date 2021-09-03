describe("The buyMinutes function" , function() {
    it("should return 1.85 if I buy 1 minute" , function() {
        assert.equal(1.85, buyMinutes(1));

    });
    
    it("should return 'Please insert correct amount' if I buy 0 minutes" , function() {
        assert.equal('Please insert correct amount', buyMinutes(0));
    });
    
});

