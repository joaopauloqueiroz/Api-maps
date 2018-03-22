const app = require('express')();
const express = require('express');
const consign = require('consign');
const fs = require('fs');

module.exports = function(){
	app.set('view engine','ejs');
	app.set('views','./src/views');
	app.use(express.static('./src/public'));

	app.set(fs);
	consign()
	.into(app);

	return app;
}