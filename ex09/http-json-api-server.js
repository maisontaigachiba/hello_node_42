const http = require('http');
require('url');

const parse = '/api/parsetime';
const unix = '/api/unixtime';
if (process.argv.length == 3) {
	try {
		const port = parseInt(process.argv[2]);
		const server = http.createServer((req, res) => {
			const parseUrl = new URL(req.url, 'http://localhost');
			if (parseUrl.searchParams.get('iso') === null) {
				console.log('Error: not iso');
				res.end();
				return ;
			}
			const time = new Date(parseUrl.searchParams.get('iso'));
			if (isNaN(time)) {
				console.log('Error: not time');
				res.end();
				return ;
			}
			if (parseUrl.pathname == parse) {
				res.end(JSON.stringify({
					hour: time.getUTCHours(),
					minute: time.getUTCMinutes(),
					second: time.getUTCSeconds(),
				}) + '\n');
			} else if(parseUrl.pathname == unix) {
				res.end(JSON.stringify({
					unixtime: time.getTime(),
				}) + '\n');
			} else {
				res.end();
			}
		});
		server.listen(port).on('error', (err) => {
			console.log(err.message);
			return ;
		});
	} catch (err) {
		console.log(err.message);
	}
}