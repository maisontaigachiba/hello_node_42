const net = require('net');

function getTime() {
	const d = new Date();
	let year = d.getFullYear().toString().padStart(4, '0');
	let month = (d.getMonth() + 1).toString().padStart(2, '0');
	let date = d.getDate().toString().padStart(2, '0');
	let hour = d.getHours().toString().padStart(2, '0');
	let minute = d.getMinutes().toString().padStart(2, '0');
	return (year + '-' + month + '-' + date + ' ' + hour + ':' + minute + '\n');
}

if (process.argv.length == 3) {
	try {
		const port = parseInt(process.argv[2]);
		const server = net.createServer((res) => {
			res.on('error', (err) => {
				console.log(err.message);
				return ;
			});
			res.write(getTime());
			res.end();
			}).on('error', (err) => {
				console.log(err.message);
				return ;
			});
			server.listen(port).on('error', (err) => {
				console.log(err.message);
				return ;
			});
		} catch(err) {
		console.log(err.message);
	}
}