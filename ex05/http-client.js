const http = require('http');

if (process.argv.length == 3) {
	try {
		http.get(process.argv[2], (res) => {
			res.on('data', (chunk) => {
				console.log(chunk.toString());
			});
			res.on('end', () => {
			});
			res.on('error', () => {
				console.log(err.message);
			});
		}).on('error', (err) => {
			console.log(err.message);
		});
	} catch (err) {
		console.log(err.message);
	}
}