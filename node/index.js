const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// one way of listening the event
myEmitter.on('error',(error) => {
    console.log('Error event triggered', error);
})

//second way of listening to the event
myEmitter.addListener('error',(error) => {
    console.log('Error event triggered', error);
});

// emit to trigger the event
myEmitter.emit('error', { status: '404', message: 'Not Found' });

// fs.readFile('C:\\Robogarden\\fsbootcampsept2026\\html\\index.html', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('Error reading file:', err);
//         console.log(err);
//     } else {
//         console.log('File content:', data);
//         console.log(data);
//     }
// });

// console.log(__filename);
// console.log(__dirname);
// // console.log(path);
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());



// let name = 'Harsh';
// console.log(name);

// function calculateTax(amount, tax) {
//     return amount * tax;
// }

// module.exports.name = name;
// module.exports.calculateTax = calculateTax;
// console.log(module);