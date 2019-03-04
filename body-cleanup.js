var fs = require('fs');
var glob = require("glob")

var path = 'dist/**/index.html';

glob(path, function (er, files) {
	files.forEach((filename)=>{
		// load file
		fs.readFile(filename, 'utf8', function(err, data) {  
			if (err) throw err;

			//remove body tags
			data = data.replace('<body>','').replace('</body>','')
			
			//Save changes
			fs.writeFile(filename, data, function(err, data){
				if (err) console.log(err);
				console.log(`Removed <body> tags from: '${filename}'`);
			});
			
		});
	});
});