const operations = require('./operations');
const assert = require('assert');



it('Correctly sums  1 and 3 ', ()=> {
    assert.equal( operations.add(1,3), 4)
});
it('correctly sums  2 and 3 ', ()=> {
    assert.equal( operations.add(2,3), 5)
});


//subtract
it('correctly substracts 2 and 3 ', ()=> {
    assert.equal( operations.subtract(2,3), -1)
});

//multiply
it('correctly multiplies 2 and 3 ', ()=> {
    assert.equal( operations.multiply(2,3), 6)
});


//divide
it('correctly divides  2 and 3 ', ()=> {
    assert.equal( operations.divide(2,3), 2/3)
});
it('correctly divides 7 and 1 ', ()=> {
    assert.equal( operations.divide(7,1), 7)
});

//VALIDATION
it('Indicate failure when a string is used instead of a number', () => {
  assert.equal(operations.validateNumbers('michael', 5), false);
})

it('Indicate failure when two string used instead of a number', () => {
  assert.equal(operations.validateNumbers('michael', 'nathan'), false);
})

it('Successfully runs when two numbers are used', () => {
  assert.equal(operations.validateNumbers(5, 5), true);
})
