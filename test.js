const operations = require('./operations');
const assert = require('assert');

it('correctly calculates the sum of 1 and 3 ', ()=> {
    assert.equal( operations.add(1,3), 4)
});
it('correctly calculates the sum of 2 and 3 ', ()=> {
    assert.equal( operations.add(2,3), 5)
});
