var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
require('./database.js')
var app=express();
app.use(bodyParser.json());
app.use(logger('dev'));


app.get('/',function(req,res){
	res.send('hi');
})

app.listen(3000,function(){
	console.log('listening on');
});