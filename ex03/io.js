const fs = require('fs');

let line = 0;
if (process.argv.length == 3) {
	try {
		let buf = fs.readFileSync(process.argv[2]).toString();
		for (let i = 0; i < buf.length; i++) {
			if (buf[i] == "\n") {
				line++;
			}
		}
		console.log(line);
	} catch (err) {
		console.log(err.message);
	}
}