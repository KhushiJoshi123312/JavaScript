// Define a callback function
function greeting(name) {
  console.log(`Hello ${name}`);
}

// Define a function that takes a callback
function getname(callback) {
  var name = prompt('Enter name:');
  callback(name);
}

// Call the function with the callback
getname(greeting);
