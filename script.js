function firstChar(text) {
  // your code here
	console.log(firstChar(' Rosa Parks '));     // Output: 'R'
console.log(firstChar('  Hello World '));   // Output: 'H'
console.log(firstChar('   '));              // Output: ''
console.log(firstChar(''));                  // Output: ''

}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
