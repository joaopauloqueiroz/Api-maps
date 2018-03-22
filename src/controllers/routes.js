module.exports = function(app){
	const fs = require('fs');
	const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCecY8dgAzVifZzlg7YUvSvl3M-QtnY7cc";
	app.get('/', function(req, res){

		var result = JSON.parse(fs.readFileSync('./src/files/teste.json'));

			res.render('index',{url: url, arquivo: result});
	});

	app.get('/data', (req, res) => {

	var result = JSON.parse(fs.readFileSync('./src/files/teste.json'));

    res.send(cleanArray(result));
});


app.get('/pireli', (req, res) => {
		var dados = [];
	var result = JSON.parse(fs.readFileSync('./src/files/teste.json'));
		var q = 0;

		for (var i = 0; i < result.length; i++) {
			if (result[i].id === 1) {
				dados[q] = result[i];
			}
			q++;
		}

	var data = cleanArray(dados);

    res.send(data);

	});



app.get('/bridge', (req, res) => {
		var dados = [];
	var result = JSON.parse(fs.readFileSync('./src/files/teste.json'));
		var j = 0;
		for (var i = 0; i < result.length; i++) {
			if (result[i].id == 2) {
				dados[j] = result[i];
			}

			j++;
		}
    res.send(cleanArray(dados));

	});



app.get('/outra', (req, res) => {
	var dados= [];
	var result = JSON.parse(fs.readFileSync('./src/files/teste.json'));
	var k = 0;
	for (var i = 0; i < result.length; i++) {
		if (result[i].id == 3) {
				dados[k] = result[i];
			}

		k++;
		
	}

   res.send(cleanArray(dados));

	});

	
}


function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}