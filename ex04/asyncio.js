const fs = require('fs');

if (process.argv.length == 3) {
	try {
		fs.readFile(process.argv[2], (err, data) => {
			if (err) {
				console.log(err.message);
			} else {
				console.log(data.toString().split("\n").length - 1);
			}
		});
	} catch (err) {
		console.log(err.message);
	}
}