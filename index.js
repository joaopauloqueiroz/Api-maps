const app = require('./src/config/express')();
const rotas = require('./src/controllers/routes')(app);

app.listen(3000, function(){
	console.log('Servidor node js no ar...');
});