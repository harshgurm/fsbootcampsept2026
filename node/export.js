let x = 10;

function hello(name){
    let x = 20;
    console.log(`Hello, ${name}!`);
    console.log('Value in function: ' + x);
}

console.log('Value in global scope: ' + x);

module.exports.hello = hello;
module.exports.val = x;
