const operations = require('./operations');
const assert = require('assert');



it('correctly calculates the sum of 1 and 3 ', ()=> {
    assert.equal( operations.add(1,3), 4)
});
it('correctly calculates the sum of 2 and 3 ', ()=> {
    assert.equal( operations.add(2,3), 5)
});


//subtract
it('correctly calculates the substitution of 2 and 3 ', ()=> {
    assert.equal( operations.subtrac  st(2,3), -1)
});

//multiply
it('correctly calculates the multiplication of 2 and 3 ', ()=> {
    assert.equal( operations.multiply(2,3), 6)
});


//divide
it('correctly calculates the division of 2 and 3 ', ()=> {
    assert.equal( operations.divide(2,3), 2/3)
});
it('correctly calculates the division of 7 and 1 ', ()=> {
    assert.equal( operations.divide(7,1), 7)
});
