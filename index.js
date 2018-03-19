var fs = require('fs');
var colors = require('colors');

fs.readdir('.', function(err, files) {
	console.log('Zawartość katalogu:'.yellow);
    console.log(files);
    fs.writeFile('./tekst.txt', files, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.red);
	});
});

