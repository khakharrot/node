var generator = require('generate-password');

var password = generator.generate({
	length: 100,
	numbers: true
});

console.log(password);