const http = require('http');

function getData(url) {
	return new Promise((resolve, reject) => {
		try {
			http.get(url, (res) => {
				res.on('error', (err) => {
					reject(err);
				});
				let line = '';
				res.on('data', (chunk) => {
					line += chunk;
				});
				res.on('end', () => {
					resolve(line.toString());
				});
			}).on('error', (err) => {
				reject(err);
			});
		} catch (err) {
			reject(err.message);
		}
	});
}
if (process.argv.length == 5) {
	let array = [];
	for (let i = 2; i < process.argv.length; i++) {
		array.push(getData(process.argv[i]));
	}
	Promise.all(array)
		.then((value) => {
			for (let i = 0; i < value.length; i++) {
				console.log(value[i]);
			}
		})
		.catch(() => {
			console.log("Invalid URL");
		});
}