var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require("./db/mongo.connection")
var users = require('./routes/users.routes.mongo');
var EstudanteRoutes = require("./routes/EstudanteRoutes")
var ProfessorRoutes = require("./routes/ProfessorRoutes")

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,DELETE")


})

app.use('/users', users);
app.use("/estudantes", EstudanteRoutes)
app.use("/professores",ProfessorRoutes)

module.exports = app;
