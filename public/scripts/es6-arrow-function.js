'use strict';

// challenge
// const getFirstName = (name) => {
//   return name.split(' ')[0];
// };

var fullName = 'ben yang';
var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};
var getLastName = function getLastName(name) {
  return name.split(' ')[1];
};
console.log('First Name: ' + getFirstName(fullName).toUpperCase());
console.log('Last Name: ' + getLastName(fullName).toUpperCase());