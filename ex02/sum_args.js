var total = 0;
for (var i = 0; i < process.argv.length - 2; i++)
	total += parseInt(process.argv[i + 2]);
console.log(total);