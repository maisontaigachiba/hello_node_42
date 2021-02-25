const http = require('http');

if (process.argv.length == 3) {
	try {
		http.get(process.argv[2], (res) => {
			let line = '';
			res.on('data', (chunk) => {
				line += chunk;
			});
			res.on('end', () => {
				console.log(line.length);
				console.log(line);
			});
			res.on('error', (err) => {
				console.log(err.message);
			});
		}).on('error', (err) => {
			console.log(err.message);
		});
	} catch (err) {
		console.log(err.message);
	}
}