//add
const add = (x, y) => +x + +y

//subtract
const subtract = (x, y) => +x - +y

const multiply = (x, y) => +x * +y

const divide = (x,y) => +x / +y


// validate validateNumbers
//both must be numbers
const validateNumbers = (x,y) => {
  if (isNaN(x) || isNaN(y)){
    return false;
  }
  return true;
}



module.exports = {
  add,
  subtract,
  multiply,
  divide,
  validateNumbers
}
