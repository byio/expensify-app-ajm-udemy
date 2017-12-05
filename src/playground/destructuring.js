// OBJECT DESTRUCTURING

// const person = {
//   name: 'Ben',
//   age: 32,
//   location: {
//     city: 'Singapore',
//     temp: 100
//   }
// };
//
// const {name: firstName='Anon', age} = person;
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature}F in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);

// ARRAY DESTRUCTURING

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , mediumPrice] = item;
console.log(`A medium ${product} costs ${mediumPrice}.`);
