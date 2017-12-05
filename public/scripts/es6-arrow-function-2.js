'use strict';

// arguments object not bound with arrow functions
var add = function add(a, b) {
  // console.log(arguments); // ReferenceError: arguments is not defined
  return a + b;
};

console.log('Sum: ' + add(1, 2));

// 'this' keyword not bound with arrow functions
/* the 'this' keyword in arrow functions uses the functions' parents' 'this'. */
var user = {
  name: 'Ben',
  cities: ['Singapore, SG', 'Logan, UT', 'Buffalo, NY'],
  printInfo: function printInfo() {
    var _this = this;

    console.log('User Name: ' + this.name);
    // if a regular function was used in the forEach method below, 'this' will be undefined in 'this.cities'
    // this.cities.forEach((city) => {
    //   console.log(`${this.name} has lived in ${city}.`);
    // });
    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city + '.';
    });
  }
};
console.log(user.printInfo());

// Challenge
var multiplier = {
  numbers: [1, 2, 3, 4, 5],
  factor: 100,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.factor;
    });
  }
};
console.log(multiplier.multiply());