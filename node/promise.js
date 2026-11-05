let promise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
       if(false) {
        resolve('Operation successful');
       } else {
        reject('Operation failed');
       }
    }, 2000);
});

promise.then((data) => {
    console.log('then response', data);
}).catch((error) => {
    console.log('catch response', error);
}).finally(() => {
    console.log('finally response');
});
