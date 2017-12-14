// to play around with this file again, please import this over in app.js to see the logged messages in the console

// instantiating a new promise; rarely will have to write this code in an app (can find these in the firebase library)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const resolveData = {
      name: 'Ben Yang',
      age: 32,
      profession: 'digital craftsman'
    };
    const rejectData = {
      msg: 'oops! something went wrong.'
    };
    // resolve(resolveData);
    reject(rejectData);
  }, 3000);
});

// these will run when the promise is resolved or rejected; this is the part of the promise we have to write
myPromise.then((data) => {
  console.log(data);
}).catch((errorObj) => {
  console.log(errorObj.msg);
});
