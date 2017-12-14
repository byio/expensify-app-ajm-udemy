import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default};





// NOTES BELOW

// // setup subscription to ANY cahnges to expenses data on firebase db
// db.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log('here is the list of expenses: ', expenses);
//   }, (err) => {
//     console.log('error retrieving data. ', err);
//   });
//
// // setup subscription to REMOVAL of an expense
// db.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
//
// // setup subscription to changes in child data ONLY
// db.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log('this expense was changed: ', snapshot.key, snapshot.val());
//   });
//
// // // add (push) new expense to see live update from subcscription after simulated delay (3500ms)
// // setTimeout(() => {
// //   db.ref('expenses').push({
// //     description: 'Groceries',
// //     note: '',
// //     amount: 30000,
// //     createdAt: 10000
// //   }, () => {
// //     console.log('pushed new expense into db');
// //   });
// // }, 3500);
//
// // push 3 expenses (description, note, amount, createdAt) into firebase
// // db.ref('expenses').push({
// //   description: 'Rent',
// //   note: '',
// //   amount: 162000,
// //   createdAt: 10000
// // }, () => {
// //   console.log('pushed expense into db');
// // });
//
// // db.ref()
// //   .on('value', (snapshot) => {
// //     console.log('data retrieved');
// //     const val = snapshot.val();
// //     console.log(val);
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// //   }, (err) => {
// //     console.log('Error fetching data. ', err);
// //   });
// //
// // // update subsribed data after a simulated delay (3500ms)
// // setTimeout(() => {
// //   db.ref()
// //     .update({
// //       age: 34
// //     })
// //     .then(() => {
// //       console.log('data updated');
// //     })
// //     .catch((err) => {
// //       console.log('error updating data. ', err);
// //     });
// // }, 3500);
//
// // db.ref()
// //   .once('value')
// //   .then((snapshot) => {
// //     console.log(snapshot.val());
// //   })
// //   .catch((err) => {
// //     console.log('Error fetching data. ', err);
// //   });
//
// // db.ref().set({
// //   name: 'Ben Yang',
// //   age: 32,
// //   stressLevel: 6,
// //   job: {
// //     title: 'software developer',
// //     company: 'google'
// //   },
// //   location: {
// //     city: 'UT',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved!');
// // }).catch((err) => {
// //   console.log('Asynchronous process failed. ', err);
// // });
// //
// // db.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'amazon',
// //   'location/city': 'Seattle'
// // });
//
// // db.ref('attributes').set({
// //   height: 65,
// //   weight: 160
// // }).then(() => {
// //   console.log('Attributes added!');
// // }).catch((err) => {
// //   console.log('Asynchronous process failed. ', err);
// // });
//
// // db.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('data wiped');
// //   })
// //   .catch((error) => {
// //     console.log('data NOT wiped', error);
// //   });
